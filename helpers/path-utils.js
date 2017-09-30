function stripFileSystemPath(path) {
  let splitPath = path.split('/')
  let tempFolderIdx = splitPath.indexOf('temp')

  if (tempFolderIdx > -1) {
    let slicedFilePath = splitPath.slice(tempFolderIdx + 2).join('/')
    return slicedFilePath
  } else {
    return path
  }
}

module.exports = {
  stripFileSystemPath
}
