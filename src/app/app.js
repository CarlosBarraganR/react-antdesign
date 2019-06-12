// @flow
import React from 'react';
import withStyles from 'react-jss';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HomeViewContainer } from '../views/home/home.view.container';
import { NotFound } from '../views/not-found/not-found.view';
import { ViewTest } from '../views/view-test/viewTest.view';
import Logo from '../assets/logo.svg';

type Props = {
  classes: Object
};

const { Header, Content, Footer, Sider } = Layout;

const AppComp = (props: Props) => {
  const { classes } = props;
  return (
    <Router>
      <Layout className={classes.layout}>
        <Sider
          trigger={null}
          breakpoint="md"
          collapsedWidth="80"
          className={classes.sider}
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <img alt="logo" src={Logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys="1">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="user" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/test">
                <Icon type="user" />
                Another View
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={classes.header}>
            <h3>Header Title</h3>
          </Header>
          <Content className={classes.content}>
            <Switch>
              <Route exact path="/" component={HomeViewContainer} />
              <Route exact path="/test" component={ViewTest} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer className={classes.footer}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

const styles: Object = {
  layout: { marginLeft: 200 },
  sider: {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0
  },
  header: {
    background: '#fff',
    paddingLeft: 10,
    position: 'fixed',
    zIndex: 1,
    width: '100%'
  },
  content: { marginTop: 64, padding: 20, minHeight: '100vh' },
  footer: { textAlign: 'center' }
};

export const App = withStyles(styles)(AppComp);
