// @flow
import React from 'react';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Logo from '../../assets/logo.svg';

type Props = {
  classes: Object,
  isViewResponsive: boolean,
  setDrawerOpen: (open: boolean) => void
};

const MenuComp = (props: Props) => {
  const { isViewResponsive, setDrawerOpen } = props;
  return (
    <div>
      <img alt="logo" src={Logo} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Link
            to="/"
            onClick={() => (isViewResponsive ? setDrawerOpen(false) : null)}
          >
            <Icon type="home" />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link
            to="/test"
            onClick={() => (isViewResponsive ? setDrawerOpen(false) : null)}
          >
            <Icon type="desktop" />
            <span>Option 1</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

const styles: Object = {};

export const MenuList = withStyles(styles)(MenuComp);
