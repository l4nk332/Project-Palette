import {DESCENDING, USAGE} from 'utils/constants';

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
  infoActive: false,
  urlActive: true,
};

export const initialFiltersState = {
  filterByEnabled: true,
};

export const initialSortState = {
  sortBy: USAGE,
  sortOrder: DESCENDING,
};
