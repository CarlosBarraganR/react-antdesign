// @flow
import React from 'react';
import withStyles from 'react-jss';
import { Layout, Drawer } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeViewContainer } from '../views/home/home.view.container';
import { ViewTest } from '../views/view-test/viewTest.view';
import { MenuList } from './menu-list/menu-list.component';
import { responsiveMarginLeft } from './util/responsiveLayoutCSS';
import { HeaderContent } from './header-content/header-content.component';
import { NotFoundView } from '../views/not-found/not-found.view';
import { LoginViewContainer } from '../views/login/login.view.container';

type Props = {
  classes: Object,
  isViewResponsive: boolean,
  siderCollapsed: boolean,
  drawerOpen: boolean,
  user: Object,
  setLayoutResponsive: (responsive: boolean) => void,
  setDrawerOpen: (open: boolean) => void,
  setSiderCollapsed: (collapsed: boolean) => void
};

const { Content, Footer, Sider } = Layout;

const AppComp = (props: Props) => {
  const {
    classes,
    setLayoutResponsive,
    setDrawerOpen,
    drawerOpen,
    user,
    setSiderCollapsed,
    isViewResponsive,
    siderCollapsed
  } = props;

  console.log(user);

  return (
    <Router>
      {user ? (
        <Layout className={classes.layout}>
          <Sider
            breakpoint="md"
            className={classes.sider}
            collapsible={!isViewResponsive}
            collapsed={siderCollapsed}
            collapsedWidth={!isViewResponsive ? '80' : '0'}
            onBreakpoint={broken => setLayoutResponsive(broken)}
            onCollapse={collapsed => setSiderCollapsed(collapsed)}
          >
            <MenuList
              isViewResponsive={isViewResponsive}
              setDrawerOpen={setDrawerOpen}
            />
          </Sider>
          <Layout>
            <HeaderContent
              siderCollapsed={siderCollapsed}
              isViewResponsive={isViewResponsive}
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              setSiderCollapsed={setSiderCollapsed}
            />
            <Content className={classes.content}>
              <Switch>
                <Route exact path="/" component={HomeViewContainer} />
                <Route exact path="/test" component={ViewTest} />
                <Route component={NotFoundView} />
              </Switch>
            </Content>
            <Footer className={classes.footer}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
            <Drawer
              // Doesn't work with jssClases
              bodyStyle={{
                height: '100%',
                backgroundColor: '#001529',
                padding: 0
              }}
              placement="left"
              closable={false}
              onClose={() => setDrawerOpen(false)}
              visible={drawerOpen}
            >
              <MenuList
                isViewResponsive={isViewResponsive}
                setDrawerOpen={setDrawerOpen}
              />
            </Drawer>
          </Layout>
        </Layout>
      ) : (
        <Layout>
          <Content>
            <Switch>
              <Route exact path="/" component={LoginViewContainer} />
              <Route component={NotFoundView} />
            </Switch>
          </Content>
        </Layout>
      )}
    </Router>
  );
};

const styles: Object = {
  layout: {
    minHeight: '100vh'
  },
  sider: {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    zIndex: 2
  },
  content: {
    marginLeft: props =>
      responsiveMarginLeft(props.siderCollapsed, props.isViewResponsive),
    marginTop: 64,
    padding: 20,
    minHeight: 'calc(100vh-64px)'
  },
  footer: {
    marginLeft: props =>
      responsiveMarginLeft(props.siderCollapsed, props.isViewResponsive),
    textAlign: 'center'
  }
};

export const App = withStyles(styles)(AppComp);
