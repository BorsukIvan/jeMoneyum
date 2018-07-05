import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './FullButtonStyles';
import { addComponentExample } from '../../../Services/ExamplesRegistry';

// Note that this file (App/Components/FullButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
addComponentExample('Full Button', () => (<FullButton
    text="Hey there"
    onPress={() => window.alert('Full Button Pressed!')}
  />));

const FullButton = ({ text, onPress }) => (
  <TouchableOpacity style={[styles.button, styles]} onPress={onPress}>
    <Text style={styles.buttonText}>{text && text.toUpperCase()}</Text>
  </TouchableOpacity>
);

FullButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  styles: PropTypes.objectOf.isRequired
};

export default FullButton;
