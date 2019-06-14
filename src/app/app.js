// @flow
import React from 'react';
import withStyles from 'react-jss';
import { Layout, Menu, Icon, Dropdown, Avatar, Button, Drawer } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeViewContainer } from '../views/home/home.view.container';
import { NotFound } from '../views/not-found/not-found.view';
import { ViewTest } from '../views/view-test/viewTest.view';
import { MenuList } from './menu-list/menu-list.component';

type Props = {
  classes: Object,
  isViewResponsive: boolean,
  siderCollapsed: boolean,
  drawerOpen: boolean,
  setLayoutResponsive: (responsive: boolean) => void,
  setDrawerOpen: (open: boolean) => void,
  setSiderCollapsed: (collapsed: boolean) => void
};

const { Header, Content, Footer, Sider } = Layout;

const responsiveMarginLeft = (
  siderCollapsed: boolean,
  isViewResponsive: boolean
) => {
  if (siderCollapsed) {
    return isViewResponsive ? 0 : 80;
  }
  return 200;
};

const responsiveHeader = (
  siderCollapsed: boolean,
  isViewResponsive: boolean
) => {
  if (siderCollapsed) {
    return isViewResponsive ? '100%' : 'calc(100% - 80px)';
  }
  return 'calc(100% - 200px)';
};

const AppComp = (props: Props) => {
  const {
    classes,
    setLayoutResponsive,
    setDrawerOpen,
    drawerOpen,
    setSiderCollapsed,
    isViewResponsive,
    siderCollapsed
  } = props;

  const menu = (
    <Menu onClick={e => console.log(`clicked menu:`, e.key)}>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );

  return (
    <Router>
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
          <Header className={classes.header}>
            <Icon
              className={classes.trigger}
              type={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() =>
                isViewResponsive
                  ? setDrawerOpen(!drawerOpen)
                  : setSiderCollapsed(!siderCollapsed)
              }
            />
            <Dropdown
              overlay={menu}
              placement="bottomRight"
              trigger={['click']}
            >
              <Button className={classes.buttonTransparent}>
                <Avatar className={classes.avatar} icon="user" />
                Username
              </Button>
            </Dropdown>
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
          <Drawer
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
  header: {
    background: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    position: 'fixed',
    width: props =>
      responsiveHeader(props.siderCollapsed, props.isViewResponsive),
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: props =>
      responsiveMarginLeft(props.siderCollapsed, props.isViewResponsive),
    boxShadow: '0 1px 4px rgba(0,21,41,.08)'
  },
  content: {
    marginLeft: props =>
      responsiveMarginLeft(props.siderCollapsed, props.isViewResponsive),
    marginTop: 64,
    padding: 20,
    minHeight: 'calc(100vh-64px)'
  },
  trigger: {
    height: 64,
    padding: '22px 0px',
    fontSize: 20,
    cursor: 'pointer',
    transition: 'all .3s, padding 0s'
  },
  avatar: {
    backgroundColor: '#1890ff',
    marginRight: 10
  },
  drawer: {
    backgroundColor: 'red'
  },
  footer: {
    marginLeft: props =>
      responsiveMarginLeft(props.siderCollapsed, props.isViewResponsive),
    textAlign: 'center'
  },
  buttonTransparent: {
    border: 'transparent',
    boxShadow: 'none'
  }
};

export const App = withStyles(styles)(AppComp);
