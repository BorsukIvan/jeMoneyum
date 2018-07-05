import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Button
} from 'react-native';

// Styles
import styles from './Screen1Styles';

const Screen1 = ({ navigator, title }) => (
    <View style={styles.mainContainer}>
      <Button
        onPress={() => {
          navigator.push({
            screen: 'jeMoneyum.Screen2',
          });
        }}
        title={`${title} - Screen1`}
      />
    </View>
);

Screen1.propTypes = {
  navigator: PropTypes.object,
  title: PropTypes.string.isRequired,
};


export default Screen1;
