// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';
import { LoginView } from './login.view';
import { userLoginAction } from '../../app/state/user-login.saga';
import { userLoadingSelector } from '../../app/app.selectors';

const mapStateToProps = (state: Object): Object => {
  return {
    userLoading: userLoadingSelector(state)
  };
};

const mapDispatchToProps = (dispatch): Object => {
  return {
    userLogin: payload => dispatch(userLoginAction(payload))
  };
};

export const LoginViewContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLifecycle({})
)(LoginView);
