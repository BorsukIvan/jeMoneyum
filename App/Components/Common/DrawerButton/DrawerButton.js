import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './DrawerButtonStyles';
import { addComponentExample } from '../../../Services/ExamplesRegistry';

// Note that this file (App/Components/DrawerButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
addComponentExample('Drawer Button', () => (<DrawerButton
    text="Example left drawer button"
    onPress={() => window.alert('Your drawers are showing')}
  />));

const DrawerButton = ({ text, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DrawerButton;
