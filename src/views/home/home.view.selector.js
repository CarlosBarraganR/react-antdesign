// @flow
import { createSelector } from 'reselect';

const testSlice = state => state.dogsTest;

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
