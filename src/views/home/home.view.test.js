import React from 'react';
import ReactDOM from 'react-dom';
import { HomeView } from './home.view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
