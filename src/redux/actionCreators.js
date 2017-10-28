import {
  IS_LOADING,
  IS_NOT_LOADING,
  UPDATE_PROJECT_URL,
} from './actionTypes'


export const setIsLoading = () => ({
  type: IS_LOADING,
})

export const setIsNotLoading = () => ({
  type: IS_NOT_LOADING,
})

export const setProjectUrl = text => ({
  type: UPDATE_PROJECT_URL,
  text,
})
