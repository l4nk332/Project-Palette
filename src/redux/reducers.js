import { combineReducers } from 'redux'

import { initialStateIsLoading, initialStateProjectUrl } from './initialStates'

import {
  IS_LOADING,
  IS_NOT_LOADING,
  UPDATE_PROJECT_URL,
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

const projectUrlReducer = (state = initialStateProjectUrl, {type, text}) => {
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

export default combineReducers({
  _isLoading: isLoadingReducer,
  _projectUrl: projectUrlReducer
})
