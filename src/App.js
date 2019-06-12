// @flow
import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HomeViewContainer } from './views/home/home.view.container';
import { NotFound } from './views/not-found/not-found.view';
import { ViewTest } from './views/viewTest/viewTest.view';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        {/* Here Goes the navbar on the layout, you change layouts according to AD documentation: https://ant.design/components/layout/ */}
        <Link to="/">Home</Link>
        <Link to="/test">View Test</Link>
        <Content>
          <Switch>
            <Route exact path="/" component={HomeViewContainer} />
            <Route exact path="/test" component={ViewTest} />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
