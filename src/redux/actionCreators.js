import {
  IS_LOADING,
  IS_NOT_LOADING,
  UPDATE_PROJECT_URL,
  SEARCH_VIEW,
  PALETTE_VIEW,
  COLOR_DETAIL,
  CLEAR_COLOR,
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


export const setSearchView = () => ({
  type: SEARCH_VIEW,
})

export const setPaletteView = () => ({
  type: PALETTE_VIEW,
})


export const openColorDetail = color => ({
  type: COLOR_DETAIL,
  color,
})

export const closeColorDetail = () => ({
  type: CLEAR_COLOR,
})
