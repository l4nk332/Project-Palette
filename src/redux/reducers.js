import { combineReducers } from 'redux'

import {
  initialStateIsLoading,
  initialStateProjectUrl,
  initialStateView,
} from './initialStates'

import {
  IS_LOADING,
  IS_NOT_LOADING,
  UPDATE_PROJECT_URL,
  SEARCH_VIEW,
  PALETTE_VIEW,
} from './actionTypes'


const isLoadingReducer = (state = initialStateIsLoading, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case IS_NOT_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

const projectUrlReducer = (state = initialStateProjectUrl, { type, text }) => {
  switch (type) {
    case UPDATE_PROJECT_URL:
      return {
        ...state,
        projectUrl: text,
      }
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

export default combineReducers({
  _isLoading: isLoadingReducer,
  _projectUrl: projectUrlReducer,
  _view: viewReducer,
})
