import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Button, Text,
} from 'react-native';

// Styles
import styles from './LaunchScreenStyles';

const LaunchScreen = ({ navigator, title }) => (
    <View style={styles.mainContainer}>
      <Button
        onPress={() => {
          navigator.showModal({
            screen: 'jeMoneyum.Screen1',
          });
        }}
        title={`${title} - LaunchScreen`}
      />
      <Text>{`__DEV__  :  ${__DEV__}`}</Text>
    </View>
);

LaunchScreen.propTypes = {
  navigator: PropTypes.object,
  title: PropTypes.string,
};


LaunchScreen.defaultProps = {
  title: 'Zalupa'
};


export default LaunchScreen;
