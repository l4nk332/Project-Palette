import initialState from './initialState'

import { IS_LOADING, IS_NOT_LOADING } from './actionTypes'


const reducer = (state = initialState, action) => {
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

export default reducer
