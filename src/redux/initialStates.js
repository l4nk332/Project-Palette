import {DESCENDING, USAGE, GRID, NONE} from 'utils/constants';

export const initialLoadingState = false;

export const initialProjectUrlState = null;

export const initialProjectNameState = null;

export const initialDefaultBranchState = null;

export const initialColorDetailState = null;

export const initialPaletteState = {};

export const initialErrorState = null;

export const initialFormState = {
  username: '',
  project: '',
  url: '',
  infoActive: true,
  urlActive: false,
};

export const initialFiltersState = {
  filterBy: NONE,
};

export const initialSortState = {
  sortBy: USAGE,
  sortOrder: DESCENDING,
};

export const initialPaletteViewState = GRID;
