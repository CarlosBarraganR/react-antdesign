// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';
import { App } from './app';

const mapStateToProps = (state: Object): Object => {
  return {};
};

const mapDispatchToProps = (dispatch): Object => {
  return {
    // dogsTestApiCall: () => dispatch(dogsTestApiCallAction())
  };
};

export const AppContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLifecycle({
    onDidMount(props) {}
  })
)(App);
