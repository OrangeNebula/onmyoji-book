import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

const thumbs = {
  tamamo: require('../assets/shikigami/thumb_tamamo.png'),
};

const dummyData = [
  {
    id: 1,
    name: '스사비',
    rarity: 'SSR',
    type: '공격형',
    rate: 9.0,
    thumb: 'tamamo',
  },
  {
    id: 2,
    name: '모모카',
    rarity: 'SR',
    type: '회복형',
    rate: 8.5,
    thumb: 'tamamo',
  },
  {
    id: 3,
    name: '좌부동자',
    rarity: 'R',
    type: '보조형',
    rate: 8.0,
    thumb: 'tamamo',
  }
];

class ListShikigamiItem extends React.PureComponent {
  _onPress = () => {

  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={shikigamiItemStyles.wrap}>
          <Image source={thumbs[this.props.thumb]} />
          <Text> {this.props.name} </Text>
          <Text> {this.props.rarity} </Text>
          <Text> {this.props.type} </Text>
          <Text> {this.props.rate} </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const shikigamiItemStyles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
  }
});

const ListShikigami = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <FlatList
      data={dummyData}
      renderItem={({item}) => <ListShikigamiItem {...item} />}
      keyExtractor={(item, index) => item.id}
    />
  </View>
);

export default ListShikigami;