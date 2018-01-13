import { Asset, AppLoading } from 'expo';
import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import TabNavigationExample from './screens/TabNavigationExample';
import SlidingTabNavigationExample from './screens/SlidingTabNavigationExample';
import AlertBarsExample from './screens/AlertBarsExample';
import TranslucentBarExample from './screens/TranslucentBarExample';
import EventEmitterExample from './screens/EventEmitterExample';
import CustomNavigationBarExample from './screens/CustomNavigationBarExample';
import DrawerNavigationExample from './screens/DrawerNavigationExample';
import TabNavigationLayout from './screens/TabNavigationLayout';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@expo/ex-navigation';

const assets = [
  require('./assets/cat.gif'),
  require('./assets/colorful-windows.jpg'),
  require('./assets/paintbrush.jpg'),
  require('./assets/space.jpg'),
  require('./assets/sparkles.jpg'),
];

export const Router = createRouter(() => ({
  home: () => HomeScreen,
  about: () => AboutScreen,
  tabNavigationExample: () => TabNavigationExample,
  slidingTabNavigationExample: () => SlidingTabNavigationExample,
  alertBarsExample: () => AlertBarsExample,
  translucentBarExample: () => TranslucentBarExample,
  eventEmitterExample: () => EventEmitterExample,
  customNavigationBarExample: () => CustomNavigationBarExample,
}));

export default class App extends React.Component {
  state = {
    bootstrapped: false,
  };

  componentDidMount() {
    this._bootstrap();
  }

  _bootstrap = async () => {
    const promises = assets.map(module =>
      Asset.fromModule(module).downloadAsync()
    );
    await Promise.all(promises);
    this.setState({
      bootstrapped: true,
    });
  };

  render() {
    if (!this.state.bootstrapped) {
      return <AppLoading />;
    }

    return (
      <NavigationProvider router={Router}>
        {/*<StatusBar barStyle="light-content" />*/}
        {/*<DrawerNavigationExample />*/}
        {/*<TabNavigationExample />*/}
        {/*<TabNavigationLayout />*/}
      </NavigationProvider>
    );
  }
}