// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';
import { App } from './app';
import {
  isViewResponsiveSelector,
  siderCollapsedSelector,
  drawerOpenSelector,
  userSelector
} from './app.selectors';
import { setLayoutResponsiveAction } from './state/set-layout-responsive.saga';
import { setSiderCollapsedAction } from './state/set-sider-collapsed.saga';
import { setDrawerOpenAction } from './state/set-drawer-open.saga';

const mapStateToProps = (state: Object): Object => {
  return {
    isViewResponsive: isViewResponsiveSelector(state),
    siderCollapsed: siderCollapsedSelector(state),
    drawerOpen: drawerOpenSelector(state),
    user: userSelector(state)
  };
};

const mapDispatchToProps = (dispatch): Object => {
  return {
    setLayoutResponsive: payload =>
      dispatch(setLayoutResponsiveAction(payload)),
    setSiderCollapsed: payload => dispatch(setSiderCollapsedAction(payload)),
    setDrawerOpen: payload => dispatch(setDrawerOpenAction(payload))
  };
};

export const AppContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLifecycle({})
)(App);
