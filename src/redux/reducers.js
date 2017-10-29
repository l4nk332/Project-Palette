import { combineReducers } from 'redux'

import {
  initialStateIsLoading,
  initialStateProjectUrl,
  initialStateView,
  initialStateColorDetail,
} from './initialStates'

import {
  IS_LOADING,
  IS_NOT_LOADING,
  UPDATE_PROJECT_URL,
  SEARCH_VIEW,
  PALETTE_VIEW,
  COLOR_DETAIL,
  CLEAR_COLOR,
} from './actionTypes'


const isLoadingReducer = (state = initialStateIsLoading, action) => {
  switch (action.type) {
    case IS_LOADING:
      return true
    case IS_NOT_LOADING:
      return false
    default:
      return state
  }
}

const projectUrlReducer = (state = initialStateProjectUrl, { type, text }) => {
  switch (type) {
    case UPDATE_PROJECT_URL:
      return text
    default:
      return state
  }
}

const viewReducer = (state = initialStateView, { type }) => {
  switch (type) {
    case SEARCH_VIEW:
      return {
        ...state,
        currentView: SEARCH_VIEW,
      }
    case PALETTE_VIEW:
      return {
        ...state,
        currentView: PALETTE_VIEW,
      }
    default:
      return state
  }
}

const colorDetailReducer = (state = initialStateColorDetail, { type, color }) => {
  switch (type) {
    case COLOR_DETAIL:
      return color
    case CLEAR_COLOR:
      return null
    default:
      return state
  }
}

export default combineReducers({
  isLoading: isLoadingReducer,
  projectUrl: projectUrlReducer,
  view: viewReducer,
  colorDetail: colorDetailReducer,
})
