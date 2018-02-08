import { Asset, AppLoading, Font } from 'expo';
import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import HomeScreen from './screens/Home';
import ListShikigamiScreen from './screens/ListShikigami';
import DetailShikigamiScreen from './screens/DetailShikigami';

const assets = [
  require('./assets/shikigami/susabi.png'),
];

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  ListShikigami: {
    screen: ListShikigamiScreen,
    navigationOptions: {
      headerTitle: 'ListShikigami',
    },
  },
  DetailShikigami: {
    screen: DetailShikigamiScreen,
    navigationOptions: {
      headerTitle: 'DetailShikigami',
    },
  },
}, {
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  state = {
    bootstrapped: false,
  };

  async componentDidMount() {
    await this._bootstrap();
  }

  _bootstrap = async () => {
    const promises = assets.map(module =>
      Asset.fromModule(module).downloadAsync()
    );
    await Promise.all(promises);
    await Font.loadAsync({
      'Arial': require('./assets/fonts/Arial.ttf'),
    });
    this.setState({
      bootstrapped: true,
    });
  };

  render() {
    if (!this.state.bootstrapped) {
      return <AppLoading />;
    }

    return (
      <RootNavigator />
    );
  }
}