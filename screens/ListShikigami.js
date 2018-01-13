import React from 'react';
import { View, Text, Button } from 'react-native';

const ListShikigami = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>ListShikigami Screen</Text>
    <Button
      onPress={() => navigation.navigate('DetailShikigami')}
      title="Go to DetailShikigami"
    />
  </View>
);

export default ListShikigami;