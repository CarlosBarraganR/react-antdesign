// @flow
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HomeViewContainer } from './views/home/home.view.container';
import { NotFound } from './views/not-found/not-found.view';
import { ViewTest } from './views/view-test/viewTest.view';
import Logo from './assets/logo.svg';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ marginLeft: 200 }}>
        <Sider
          trigger={null}
          breakpoint="md"
          collapsedWidth="80"
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <img alt="logo" src={Logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
          <Header
            style={{
              background: '#fff',
              paddingLeft: 10,
              position: 'fixed',
              zIndex: 1,
              width: '100%'
            }}
          >
            <h3>Header Title</h3>
          </Header>
          <Content style={{ marginTop: 64, padding: 20 }}>
            <Switch>
              <Route exact path="/" component={HomeViewContainer} />
              <Route exact path="/test" component={ViewTest} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
