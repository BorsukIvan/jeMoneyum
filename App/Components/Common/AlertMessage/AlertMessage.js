import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './AlertMessageStyles';

class AlertMessage extends Component {
  static propTypes = {
    title: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.shape),
    show: PropTypes.bool
  };

  static defaultProps = {
    show: true,
    style: {},
    title: '',
  };


  render() {
    const messageComponent = null;
    if (this.props.show) {
      const { title, style } = this.props;
      return (
        <View
          style={[styles.container, style]}
        >
          <View style={styles.contentContainer}>
            <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
          </View>
        </View>
      );
    }

    return messageComponent;
  }
}

export default AlertMessage;
