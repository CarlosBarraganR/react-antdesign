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
