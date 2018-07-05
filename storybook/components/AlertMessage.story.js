import React from 'react';
import { storiesOf } from '@storybook/react-native';

import AlertMessage from '../../App/Components/Common/AlertMessage/AlertMessage';

storiesOf('AlertMessage')
  .add('Default', () => (
    <AlertMessage
      title="ALERT ALERT"
    />
  ))
  .add('Hidden', () => (
    <AlertMessage
      title="ALERT ALERT"
      show={false}
    />
  ))
  .add('Custom Style', () => (
    <AlertMessage
      title="ALERT ALERT"
      style={{ backgroundColor: 'red' }}
    />
  ));
