import { Navigation } from 'react-native-navigation';

import LaunchScreen from '../Containers/Launch/LaunchScreen';
import Screen1 from '../Containers/Screen1/Screen1';
import Screen2 from '../Containers/Screen2/Screen2';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('jeMoneyum.LaunchScreen', () => LaunchScreen, store, Provider);
  Navigation.registerComponent('jeMoneyum.Screen1', () => Screen1, store, Provider);
  Navigation.registerComponent('jeMoneyum.Screen2', () => Screen2, store, Provider);
}
