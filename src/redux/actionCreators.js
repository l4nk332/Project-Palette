import {
  searchGitHubProject,
  getProjectPalette,
} from 'utils/requests';

import {
  updateQueryParams,
  deleteQueryParams,
} from 'utils/history';

import {
  IS_LOADING,
  IS_NOT_LOADING,
  UPDATE_PROJECT_URL,
  UPDATE_PROJECT_NAME,
  UPDATE_DEFAULT_BRANCH,
  COLOR_DETAIL,
  CLEAR_COLOR,
  SET_PALETTE,
  ERROR,
  CLEAR_ERROR,
  UPDATE_FORM_FIELD,
  SHOW_INFO_FIELDS,
  SHOW_URL_FIELDS,
  UPDATE_FILTER_TEXT,
  UPDATE_FILTER_SELECT,
  ENABLE_FILTER_SELECT,
  DISABLE_FILTER_SELECT,
  UPDATE_SORT_SELECT,
  UPDATE_SORT_ORDER,
  CHANGE_PALETTE_VIEW,
} from 'redux/actionTypes';

export const setIsLoading = () => ({
  type: IS_LOADING,
});

export const setIsNotLoading = () => ({
  type: IS_NOT_LOADING,
});

export const setProjectUrl = text => ({
  type: UPDATE_PROJECT_URL,
  text,
});

export const setProjectName = text => ({
  type: UPDATE_PROJECT_NAME,
  text,
});

export const setDefaultBranch = text => ({
  type: UPDATE_DEFAULT_BRANCH,
  text,
});

export const openColorDetail = color => ({
  type: COLOR_DETAIL,
  color,
});

export const closeColorDetail = () => ({
  type: CLEAR_COLOR,
});

export const setError = message => ({
  type: ERROR,
  message,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setColorPalette = palette => ({
  type: SET_PALETTE,
  palette,
});

export const asyncFetchColorPalette = search => dispatch => {
  dispatch(setIsLoading());

  return searchGitHubProject(search)
    .then(response => {
      if (response.data.private) {
        throw new Error('Private repos are not supported for parsing...');
      }

      const {
        html_url,
        id,
        clone_url,
        name,
        full_name,
        pushed_at,
        default_branch
      } = response.data;

      dispatch(setProjectName(name));
      dispatch(setProjectUrl(html_url));
      dispatch(setDefaultBranch(default_branch));

      return {
        id,
        httpsCloneURL: clone_url,
        repoURI: full_name,
        pushedDate: pushed_at,
      };
    })
    .then(getProjectPalette)
    .then(response => {
      dispatch(setColorPalette(response.data));
    })
    .catch(error => {
      dispatch(setError(error));
    })
    .then(() => {
      dispatch(setIsNotLoading());
    });
};

export const updateFormField = (field, value) => ({
  type: UPDATE_FORM_FIELD,
  field,
  value,
});

export const showInfoFields = () => ({type: SHOW_INFO_FIELDS});

export const showUrlFields = () => ({type: SHOW_URL_FIELDS});

export const updateFilterText = value => dispatch => {
  if (!value.length) {
    deleteQueryParams(['search']);
  } else {
    updateQueryParams({search: value});
  }

  dispatch({
    type: UPDATE_FILTER_TEXT,
    value,
  });
};

export const updateFilterSelect = value => dispatch => {
  updateQueryParams({filter: value});

  dispatch({
    type: ENABLE_FILTER_SELECT,
  });

  dispatch({
    type: UPDATE_FILTER_SELECT,
    value,
  });
};

export const enableFilterSelect = value => dispatch => {
  if (value) {
    updateQueryParams({filter: value});
  }

  dispatch({
    type: ENABLE_FILTER_SELECT,
  });
};

export const disableFilterSelect = () => dispatch => {
  deleteQueryParams(['filter']);

  dispatch({
    type: DISABLE_FILTER_SELECT,
  });
};

export const updateSortSelect = value => dispatch => {
  updateQueryParams({sort: value});

  dispatch({
    type: UPDATE_SORT_SELECT,
    value,
  });
};

export const updateSortOrder = value => dispatch => {
  updateQueryParams({order: value});

  dispatch({
    type: UPDATE_SORT_ORDER,
    value,
  });
};

export const changePaletteView = view => ({
  type: CHANGE_PALETTE_VIEW,
  value: view,
});
