import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import color from '../constant/color';

/**
 * Asset list
 */
const iconThumbs = {
  tamamo: require('../assets/shikigami/thumb_tamamo.png'),
};

const iconRarity = {
  R: require('../assets/icon/icon-r.png'),
  SR: require('../assets/icon/icon-sr.png'),
  SSR: require('../assets/icon/icon-ssr.png'),
};

/**
 * Mock-up data
 */
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

/**
 * Shikigami Item component
 */
class ListShikigamiItem extends React.PureComponent {
  _onPress = () => {
    if (this.props.onPress)
      this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={shikigamiItemStyles.wrap}>
          <Image
            source={iconThumbs[this.props.thumb]}
            style={shikigamiItemStyles.thumb}
          />
          <Text style={shikigamiItemStyles.text}> {this.props.name} </Text>
          <View style={shikigamiItemStyles.rarityWrap}>
            <Image
              source={iconRarity[this.props.rarity]}
              style={shikigamiItemStyles.rarity}
            />
          </View>
          <Text style={shikigamiItemStyles.text}> {this.props.type} </Text>
          <Text style={shikigamiItemStyles.text}> {this.props.rate} </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const shikigamiItemStyles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  thumb: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    flex: 1,
    overflow: 'hidden',
  },
  rarityWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rarity: {
    width: 20,
    height: 12,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

/**
 * Shikigami List component
 */
const ListShikigami = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <FlatList
      data={dummyData}
      renderItem={({item}) => (
        <ListShikigamiItem
          {...item}
          onPress={(item) => navigation.navigate('DetailShikigami', item)}
        />
      )}
      keyExtractor={(item, index) => item.id}
      ListHeaderComponent={() => (
        <View style={listShikigamiStyles.header}>
          <Text style={listShikigamiStyles.headerText}> 아이콘 </Text>
          <Text style={listShikigamiStyles.headerText}> 이름 </Text>
          <Text style={listShikigamiStyles.headerText}> 희귀도 </Text>
          <Text style={listShikigamiStyles.headerText}> 유형 </Text>
          <Text style={listShikigamiStyles.headerText}> 점수 </Text>
        </View>
      )}
      ItemSeparatorComponent={() => (
        <View style={listShikigamiStyles.separator} />
      )}
      style={{
        alignSelf: 'stretch',
      }}
    />
  </View>
);

const listShikigamiStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.deepAzure,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerText: {
    flex: 1,
    color: color.white,
    textAlign: 'center',
  },
  separator: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: color.lightGrey,
    height: 1,
  }
});

export default ListShikigami;