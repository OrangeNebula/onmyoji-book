import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('ListShikigami')}
      title="Go to ListShikigami"
    />
  </View>
);

export default Home;