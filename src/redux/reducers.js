import {combineReducers} from 'redux';

import {
  initialLoadingState,
  initialProjectUrlState,
  initialColorDetailState,
  initialPaletteState,
  initialErrorState,
} from './initialStates';

import {
  IS_LOADING,
  IS_NOT_LOADING,
  UPDATE_PROJECT_URL,
  COLOR_DETAIL,
  CLEAR_COLOR,
  SET_PALETTE,
  ERROR,
  CLEAR_ERROR,
} from './actionTypes';

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

export default combineReducers({
  isLoading: isLoadingReducer,
  projectUrl: projectUrlReducer,
  colorDetail: colorDetailReducer,
  palette: paletteReducer,
  error: errorReducer,
});
