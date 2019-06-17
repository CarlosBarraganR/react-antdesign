// @flow
import React from 'react';
import withStyles from 'react-jss';
import { Form, Icon, Input, Button } from 'antd';
import Logo from '../../assets/logo.svg';

type Props = {
  classes: Object,
  form: Form,
  userLoading: boolean,
  userLogin: (user: Object) => void
};

const LoginViewComp = (props: Props) => {
  const { classes, form, userLogin, userLoading } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        userLogin(values);
      }
    });
  };

  return (
    <div className={classes.root}>
      <Form onSubmit={handleSubmit} className={classes.form}>
        <img alt="logo" src={Logo} />
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Username is required.' }]
          })(
            <Input
              prefix={<Icon type="user" className={classes.inputIcon} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Password is required.' }]
          })(
            <Input
              prefix={<Icon type="lock" className={classes.inputIcon} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <a className="login-form-forgot" href="" disabled>
            Forgot password
          </a>
          <br />
          <Button type="primary" htmlType="submit" loading={userLoading}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const styles: Object = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '30%',
    minWidth: 300,
    textAlign: 'center',
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 15,
    border: '1px solid #EAECEE'
  },
  inputIcon: {
    color: 'rgba(0,0,0,.25)'
  }
};

const WrappedNormalLoginForm = Form.create({ name: 'login' })(LoginViewComp);

export const LoginView = withStyles(styles)(WrappedNormalLoginForm);
