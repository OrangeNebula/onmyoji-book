import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const dummyData = [
  {
    id: 1,
    name: '스사비',
    rarity: 'SSR',
    type: '공격형',
  },
  {
    id: 2,
    name: '모모카',
    rarity: 'SR',
    type: '회복형',
  },
  {
    id: 3,
    name: '좌부동자',
    rarity: 'R',
    type: '보조형',
  }
];

class ListShikigamiItem extends React.PureComponent {
  _onPress = () => {

  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text> {this.props.name} </Text>
          <Text> {this.props.rarity} </Text>
          <Text> {this.props.type} </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const ListShikigami = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {/*<Button
      onPress={() => navigation.navigate('DetailShikigami')}
      title="Go to DetailShikigami"
    />*/}
    <FlatList
      data={dummyData}
      renderItem={({item}) => <ListShikigamiItem {...item} />}
      keyExtractor={(item, index) => item.id}
    />
  </View>
);

export default ListShikigami;