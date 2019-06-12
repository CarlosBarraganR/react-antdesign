// @flow
import React from 'react';
import withStyles from 'react-jss';

type Props = {
  classes: Object,
  loading: boolean,
  error: Object,
  dogUrl: string,
  dogsTestApiCall: () => void
};

const HomeViewComp = (props: Props) => {
  const { classes, loading, error, dogUrl, dogsTestApiCall } = props;
  return (
    <div className={classes.root}>
      <div className="App">
        <header className="App-header">
          <img src={dogUrl} className="App-logo" alt="logo" />
          <h1 className={classes.title}>Welcome to Dog Saga</h1>
        </header>

        {dogUrl ? (
          <p className={classes.intro}>Keep clicking for new dogs</p>
        ) : (
          <p className={classes.intro}>Replace the React icon with a dog!</p>
        )}

        {loading ? (
          <button type="button" disabled>
            Fetching...
          </button>
        ) : (
          <button type="button" onClick={dogsTestApiCall}>
            Request a Dog
          </button>
        )}

        {error && (
          <p className={classes.errorLabel}>Uh oh - something went wrong!</p>
        )}
      </div>
    </div>
  );
};

const styles: Object = {
  root: {
    height: '100vh'
  }
};

export const HomeView = withStyles(styles)(HomeViewComp);
