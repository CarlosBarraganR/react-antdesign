// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'react-jss';
import { Button } from 'antd';

type Props = {
  classes: Object
};
export const NotFoundView = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.layout}>
        <h2 className={classes.title}>404 :(</h2>
        <p className={classes.text}>Page not found</p>
        <Link to="/">
          <Button type="primary" className={classes.backToHome}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

const styles: Object = {
  container: {
    padding: '100px 75px',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '5rem',
    textAlign: 'center'
  },
  text: {
    fontSize: '1rem',
    textAlign: 'center'
  },
  backToHome: {
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#ED5569',
    border: 'none',
    color: '#FFF',
    fontSize: 16,
    fontWeight: 600,
    '&:hover': {
      color: '#FFF',
      backgroundColor: '#f28896',
      boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.18)'
    },
    '&:focus': {
      color: '#FFF',
      backgroundColor: '#f28896',
      boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.18)'
    }
  }
};

export const NotFound = withStyles(styles)(NotFoundView);
