import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { NotFoundView } from './not-found.view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <NotFoundView />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
