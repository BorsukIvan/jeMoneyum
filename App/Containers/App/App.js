import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import createStore from '../../Ducks/rootReducer';
import { registerScreens } from '../../Navigation/screens';
import '../../Config/index';


// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */

registerScreens(store, Provider);

const navigatorStyle = {
  statusBarColor: 'black',
  statusBarTextColorScheme: 'light',
  navigationBarColor: 'black',
  navBarBackgroundColor: '#0a0a0a',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'white',
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
  screen: {
    screen: 'jeMoneyum.LaunchScreen',
    title: 'LaunchScreen',
    navigatorStyle,
  },
});
