const fs = require("fs");
const { gitClone, normalizeGitHubUrl } = require("../helpers/git-utils");

/* Test Normalization of URL */
/* ========================= */

test("Should properly normalize a GitHub url", () => {
    let url = "https://github.com/l4nk332/ianjabour.io";
    let normalized = normalizeGitHubUrl(url);
    expect(normalized.httpsCloneUrl).toBe("https://github.com/l4nk332/ianjabour.io.git");
    expect(normalized.repoUri).toBe("l4nk332/ianjabour.io");
    expect(normalized.hashedUri === normalized.repoUri).toBeFalsy();
    expect(normalized.hashedUri === normalized.uniqueHash).toBeFalsy();
});

test("Should produce unique hashes for each function call", () => {
    let url = "https://github.com/l4nk332/ianjabour.io";
    let uniqueHashes = [10];

    for (let i = 0; i < 1000; i++) {
        let hash = normalizeGitHubUrl(url);
        expect(uniqueHashes.includes(hash)).toBeFalsy();
        uniqueHashes.push(hash);
    }
});


/* Test cloning of GitHub Repo */
/* =========================== */

test("Should be able to clone valid GitHub Repo Url", async () => {
    try {
        fs.accessSync("../temp/ianjabour.io")
    } catch (err) {
        expect(() => {
            throw err;
        }).toThrowError(/no such file or directory/);
    }

    await expect(gitClone(
                    "https://github.com/l4nk332/ianjabour.io",
                    "../temp/ianjabour.io"
                 )).resolves.toBe("../temp/ianjabour.io");
});
