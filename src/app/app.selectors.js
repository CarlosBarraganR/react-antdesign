// @flow
import { createSelector } from 'reselect';

const appLayoutSlice = state => state.appLayout;

export const isViewResponsiveSelector = createSelector(
  appLayoutSlice,
  slice => slice && slice.isViewResponsive
);

export const siderCollapsedSelector = createSelector(
  appLayoutSlice,
  slice => slice && slice.siderCollapsed
);

export const drawerOpenSelector = createSelector(
  appLayoutSlice,
  slice => slice && slice.drawerOpen
);

export const userSelector = createSelector(
  appLayoutSlice,
  slice => slice && slice.user
);

export const userLoadingSelector = createSelector(
  appLayoutSlice,
  slice => slice && slice.loading
);

export const userErrorSelector = createSelector(
  appLayoutSlice,
  slice => slice && slice.error
);
