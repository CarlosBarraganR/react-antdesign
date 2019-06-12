import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'antd';

storiesOf('Button', module).add('Pink', () => (
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
));
