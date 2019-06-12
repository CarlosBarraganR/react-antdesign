import React from 'react';
import { configure, addDecorator } from '@storybook/react';

configure(() => {
  /* This decorator is to add globally styles (In every single story).*/
  addDecorator(story => (
    <div style={{ backgroundColor: '#e6f0f4', height: '100vh' }}>{story()}</div>
  ));

  const req = require.context('../stories', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}, module);
