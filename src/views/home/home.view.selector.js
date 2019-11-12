// @flow
import { createSelector } from 'reselect';
import { dogsTestReducer } from './home.view.reducer';

const testSlice = state => state[dogsTestReducer.sliceName];

export const loadingTestSelector = createSelector(
  testSlice,
  slice => slice && slice.loading
);

export const errorTestSelector = createSelector(
  testSlice,
  slice => slice && slice.error
);

export const dogTestSelector = createSelector(
  testSlice,
  slice => slice && slice.dogUrl
);
