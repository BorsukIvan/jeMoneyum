import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Button
} from 'react-native';

// Styles
import styles from './Screen2Styles';

const Screen2 = ({ navigator, title }) => (
    <View style={styles.mainContainer}>
      <Button
        onPress={() => {
          navigator.push({
            screen: 'jeMoneyum.LaunchScreen',
            passProps: { title: 'BLABLABLBALBLABLABLAB' },
          });
        }}
        title={`${title} - Screen2`}
      />
    </View>
);

Screen2.propTypes = {
  navigator: PropTypes.object,
  title: PropTypes.string,
};


Screen2.defaultProps = {
  title: 'Zalupa'
};


export default Screen2;
