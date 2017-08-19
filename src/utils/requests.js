import axios from 'axios'
import path from 'path'

import { GITHUB_API, COLORS_URL } from './constants'


export function searchGitHubProject(projectURI) {
  const url = path.join(GITHUB_API, 'repos', projectURI)
  return axios.get(url)
}

export function getProjectPalette({httpsCloneURL, repoURI}) {
  return axios.get(COLORS_URL, {
    params: {
      httpsCloneURL,
      repoURI
    }
  })
}
