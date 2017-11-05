/* global describe:false, test:false, expect:false, jasmine:false */

const fs = require('fs');
const rimraf = require('rimraf');
const {gitClone, normalizeGitHubUrl} = require('../helpers/git-utils');

// Increase timeout time
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

/* Test Normalization of URL */
/* ========================= */

describe('Test Normalization of URL', () => {
  test('Should properly normalize a GitHub url', () => {
    const uri = 'l4nk332/ianjabour.io';
    const url = 'https://github.com/l4nk332/ianjabour.io.git';
    const normalized = normalizeGitHubUrl(url, uri);
    expect(normalized.httpsCloneUrl).toBe(
      'https://github.com/l4nk332/ianjabour.io.git',
    );
    expect(normalized.repoUri).toBe('l4nk332/ianjabour.io');
    expect(normalized.hashedUri === normalized.repoUri).toBeFalsy();
    expect(normalized.hashedUri === normalized.uniqueHash).toBeFalsy();
  });

  test('Should produce unique hashes for each function call', () => {
    const uri = 'l4nk332/ianjabour.io';
    const url = 'https://github.com/l4nk332/ianjabour.io.git';
    const uniqueHashes = [10];

    for (let i = 0; i < 1000; i += 1) {
      const hash = normalizeGitHubUrl(url, uri);
      expect(uniqueHashes.includes(hash)).toBeFalsy();
      uniqueHashes.push(hash);
    }
  });
});

/* Test cloning of GitHub Repo */
/* =========================== */

describe('Test Cloning of a GitHub Repo', () => {
  test('Should resolve and clone a valid GitHub Repo Url', async () => {
    try {
      fs.accessSync('../temp/ianjabour.io');
    } catch (err) {
      expect(() => {
        throw err;
      }).toThrowError(/no such file or directory/);
    }

    await expect(
      gitClone(
        'https://github.com/l4nk332/ianjabour.io',
        './temp/ianjabour.io',
      ).then(url => {
        fs.accessSync(url);
        rimraf.sync(url);
        return url;
      }),
    ).resolves.toBe('./temp/ianjabour.io');
  });

  test('Should reject an invalid GitHub Repo Url', async () => {
    await expect(
      gitClone('garbage/l4nk332/DoesNoteXisT', './temp/garbage'),
    ).rejects.toHaveProperty('code', 128);
  });

  test('Should reject/fail to run injected unix command', async () => {
    await expect(
      gitClone(
        'https://github.com/l4nk332/ianjabour.ioecho "This will fail"',
        './temp/garbage',
      ),
    ).rejects.toHaveProperty('code', 128);

    await expect(
      gitClone(
        'https://github.com/l4nk332/ianjabour.iols -lah',
        './temp/garbage',
      ),
    ).rejects.toHaveProperty('code', 128);

    await expect(
      gitClone(
        'https://github.com/l4nk332/ianjabour.iorm -rf ./temp',
        './temp/garbage',
      ),
    ).rejects.toHaveProperty('code', 128);
  });
});
