// @flow
export const responsiveHeader = (
  siderCollapsed: boolean,
  isViewResponsive: boolean
) => {
  if (siderCollapsed) {
    return isViewResponsive ? '100%' : 'calc(100% - 80px)';
  }
  return 'calc(100% - 200px)';
};

export const responsiveMarginLeft = (
  siderCollapsed: boolean,
  isViewResponsive: boolean
) => {
  if (siderCollapsed) {
    return isViewResponsive ? 0 : 80;
  }
  return 200;
};
