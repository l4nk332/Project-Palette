/* global describe:false, test:false, expect:false */

const {stripFileSystemPath} = require('../helpers/path-utils');


describe('Test Stripping of File System Path', () => {
  test('Should return path if temp folder index not found', () => {
    expect(stripFileSystemPath('/')).toEqual('/');
    expect(stripFileSystemPath('/name/fake/open')).toEqual('/name/fake/open');
    expect(stripFileSystemPath('namefakeopen')).toEqual('namefakeopen');
    expect(stripFileSystemPath('')).toEqual('');
  });

  test('Should return stripped path if temp folder index found', () => {
    expect(stripFileSystemPath('/temp')).toEqual('');
    expect(stripFileSystemPath('/temp/test')).toEqual('');
    expect(stripFileSystemPath('/temp/test/another')).toEqual('another');
    expect(stripFileSystemPath('/temp/test/another/thing')).toEqual('another/thing');
    expect(stripFileSystemPath('/temp/test/another/thing/temp/nest')).toEqual('another/thing/temp/nest');
    expect(stripFileSystemPath('/temp/test/another/nest/')).toEqual('another/nest/');
  });
});
