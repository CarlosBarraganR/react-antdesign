// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';
import { HomeView } from './home.view';
import {
  loadingTestSelector,
  errorTestSelector,
  dogTestSelector
} from './home.view.selector';
import { dogsTestApiCallAction } from './state/test-saga.action';

const mapStateToProps = (state: Object): Object => {
  return {
    loading: loadingTestSelector(state),
    error: errorTestSelector(state),
    dogUrl: dogTestSelector(state)
  };
};

const mapDispatchToProps = (dispatch): Object => {
  return {
    dogsTestApiCall: () => dispatch(dogsTestApiCallAction())
  };
};

export const HomeViewContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLifecycle({
    onDidMount(props) {
      props.dogsTestApiCall();
    }
  })
)(HomeView);
