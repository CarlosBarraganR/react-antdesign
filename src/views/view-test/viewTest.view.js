// @flow
import React from 'react';
import withStyles from 'react-jss';

type Props = {
  classes: Object
};

const ViewTestComp = (props: Props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <h1>Router is working, Yay!</h1>
    </div>
  );
};

const styles: Object = {
  root: {
    height: '100vh'
  }
};

export const ViewTest = withStyles(styles)(ViewTestComp);
