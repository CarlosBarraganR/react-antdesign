// @flow
import React from 'react';
import withStyles from 'react-jss';
import { Layout, Dropdown, Button, Avatar, Icon, Menu } from 'antd';
import {
  responsiveHeader,
  responsiveMarginLeft
} from '../util/responsiveLayoutCSS';

type Props = {
  classes: Object,
  siderCollapsed: boolean,
  isViewResponsive: boolean,
  drawerOpen: boolean,
  setDrawerOpen: (drawerOpen: boolean) => void,
  setSiderCollapsed: (siderCollapsed: boolean) => void
};

const { Header } = Layout;

const HeaderContentComp = (props: Props) => {
  const {
    classes,
    siderCollapsed,
    isViewResponsive,
    drawerOpen,
    setDrawerOpen,
    setSiderCollapsed
  } = props;

  const userMenu = (
    <Menu onClick={e => console.log(`clicked menu:`, e.key)}>
      <Menu.Item key="1">
        <Icon type="setting" />
        Settings
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="logout" />
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
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
      <Dropdown overlay={userMenu} placement="bottomRight" trigger={['click']}>
        <Button className={classes.buttonTransparent}>
          <Avatar className={classes.avatar} icon="user" />
          Username
        </Button>
      </Dropdown>
    </Header>
  );
};

const styles: Object = {
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
  buttonTransparent: {
    border: 'transparent',
    boxShadow: 'none'
  }
};

export const HeaderContent = withStyles(styles)(HeaderContentComp);
