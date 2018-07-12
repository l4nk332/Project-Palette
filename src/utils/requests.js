import axios from 'axios';
import path from 'path';

import {GITHUB_API, COLORS_URL} from 'utils/constants';

export const searchGitHubProject = projectURI => {
  const url = path.join('repos', projectURI);
  return axios.get(url, {baseURL: GITHUB_API});
};

export const getProjectPalette = params =>
  axios.post(COLORS_URL, {params});
