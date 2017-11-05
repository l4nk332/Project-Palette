const stripFileSystemPath = path => {
  const splitPath = path.split('/');
  const tempFolderIdx = splitPath.indexOf('temp');

  if (tempFolderIdx > -1) {
    const slicedFilePath = splitPath.slice(tempFolderIdx + 2).join('/');
    return slicedFilePath;
  }
  return path;
};

module.exports = {
  stripFileSystemPath,
};
