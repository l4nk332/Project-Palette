import axios from 'axios'
import path from 'path'

import { GITHUB_API } from './constants'


export function searchGitHubProject(projectURI) {
  const url = path.join(GITHUB_API, 'repos', projectURI)
  return axios.get(url)
}
