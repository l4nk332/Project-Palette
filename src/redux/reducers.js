import {combineReducers} from 'redux';

import {
  initialLoadingState,
  initialProjectUrlState,
  initialProjectNameState,
  initialDefaultBranchState,
  initialColorDetailState,
  initialPaletteState,
  initialErrorState,
  initialFormState,
  initialFiltersState,
  initialSortState,
  initialPaletteViewState,
} from 'redux/initialStates';

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

const isLoadingReducer = (state = initialLoadingState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return true;
    case IS_NOT_LOADING:
      return false;
    default:
      return state;
  }
};

const projectUrlReducer = (state = initialProjectUrlState, {type, text}) => {
  switch (type) {
    case UPDATE_PROJECT_URL:
      return text;
    default:
      return state;
  }
};

const projectNameReducer = (state = initialProjectNameState, {type, text}) => {
  switch (type) {
    case UPDATE_PROJECT_NAME:
      return text;
    default:
      return state;
  }
};

const defaultBranchReducer = (state = initialDefaultBranchState, {type, text}) => {
  switch (type) {
    case UPDATE_DEFAULT_BRANCH:
      return text;
    default:
      return state;
  }
};

const colorDetailReducer = (state = initialColorDetailState, {type, color}) => {
  switch (type) {
    case COLOR_DETAIL:
      return color;
    case CLEAR_COLOR:
      return null;
    default:
      return state;
  }
};

const paletteReducer = (state = initialPaletteState, {type, palette}) => {
  switch (type) {
    case SET_PALETTE:
      return palette;
    default:
      return state;
  }
};

const errorReducer = (state = initialErrorState, {type, message}) => {
  switch (type) {
    case ERROR:
      return message;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
};

const formReducer = (state = initialFormState, {type, field, value}) => {
  switch (type) {
    case UPDATE_FORM_FIELD:
      return Object.assign({}, state, {[field]: value});
    case SHOW_INFO_FIELDS:
      return Object.assign({}, state, {infoActive: true, urlActive: false});
    case SHOW_URL_FIELDS:
      return Object.assign({}, state, {infoActive: false, urlActive: true});
    default:
      return state;
  }
};

const filterReducer = (state = initialFiltersState, {type, value}) => {
  switch (type) {
    case UPDATE_FILTER_TEXT:
      return Object.assign({}, state, {filterText: value});
    case UPDATE_FILTER_SELECT:
      return Object.assign({}, state, {filterBy: value});
    default:
      return state;
  }
};

const sortReducer = (state = initialSortState, {type, value}) => {
  switch (type) {
    case UPDATE_SORT_SELECT:
      return Object.assign({}, state, {sortBy: value});
    case UPDATE_SORT_ORDER:
      return Object.assign({}, state, {sortOrder: value});
    default:
      return state;
  }
};

const paletteViewReducer = (state = initialPaletteViewState, {type, value}) => {
  switch (type) {
    case CHANGE_PALETTE_VIEW:
      return value;
    default:
      return state;
  }
};

export default combineReducers({
  isLoading: isLoadingReducer,
  projectUrl: projectUrlReducer,
  projectName: projectNameReducer,
  defaultBranch: defaultBranchReducer,
  colorDetail: colorDetailReducer,
  palette: paletteReducer,
  error: errorReducer,
  form: formReducer,
  filters: filterReducer,
  sort: sortReducer,
  paletteView: paletteViewReducer,
});
