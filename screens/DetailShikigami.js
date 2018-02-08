import { Asset, AppLoading } from 'expo';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const mockData = {
  name: '타마모',
  rarity: 'SSR',
  skin: [
    {
      file: 'tamamo-skin-01.png',
      name: '기본',
    },
    {
      file: 'tamamo-skin-02.png',
      name: '각성',
    },
    {
      file: 'tamamo-skin-03.png',
      name: '어둠의 춤',
    },
  ],
  cv: {
    jp: '박로미',
    ko: '곽규미',
  },
  stats: {
    default: {
      atk: 145,
      hp: 1067,
      def: 54,
      spd: 100,
      crit: 12,
      critDmg: 160,
      effectHit: 0,
      effectRes: 0,
    },
    awakened: {
      atk: 3350,
      hp: 12532,
      def: 353,
      spd: 110,
      crit: 12,
      critDmg: 160,
      effectHit: 0,
      effectRes: 0,
    }
  },
  introduction: 'The unfathomable great youkai Tamamo no Mae,\n' +
  'possessing incomparable beauty and formidable demonic power.\n' +
  'Has a deep friendship with Kuzunoha who is also a fox demon,\n' +
  'they seemed to have made some kind of agreement.\n' +
  'Although frequently appearing in the form of a elaborately dressed woman,\n' +
  'the true appearance is not actually so.',
  skills: [
    {
      icon: '',
      type: 'Normal',
      onibi: 0,
      cooldown: 0,
      name: 'Spiritual Attack',
      castingWords: 'In this world, everyone keeps their own secrets.',
      description: 'Deals 100% attack damage to target, as well as 10% (+accuracy) chance to confuse for 1 turn.',
      levelAddition: [
        '+5% damage',
        '+5% damage',
        '+5% damage',
        '+10% damage',
      ],
    },
    {
      icon: '',
      type: 'Special',
      onibi: 3,
      cooldown: 0,
      name: 'Skyfall',
      castingWords: 'Superficial beauty often causes one to forget any danger.',
      description: 'Deal 131% AOE damage, damage -15% if target health <50%.',
      levelAddition: [
        '+5% damage',
        '+15% damage to target with health >80%',
        '+5% damage',
        'Immediately use Foxfire at no cost on enemy with lowest health ratio if any is killed',
      ],
    },
    {
      description: 'Ignore 100 defense.',
    },
  ],
  biography: [
    {
      audio: '',
      dialogue: '쿠즈노하에게...\n' +
      '전략.\n' +
      '…무슨 말부터 써야 할지 모르겠구나. 붓이 가는 대로 쓸 테니 너무 개의치 말아줬으면 해.\n' +
      '쿠즈노하, 얼마 전 네 아들을 봤어. 성에서는 모두 그 아이에 대해 얘기하느라 바쁘더군.' +
      '너 대신 그 아이를 만나고 싶어. 잘 돌봐주기로 약속하기도 했으니까.' +
      '하지만, 그 녀석은 착한 아이야. 도성을 지키는 일이 자기 사명이라 생각하고 있어.' +
      '조만간에 나를 적으로 삼게 되겠지.',
    },
    {
      audio: '',
      dialogue: '얼마 전 성에 웬 거물이 왔어. 그는 날 보자마자 왜 여장을 하고 있냐고 묻더군. 이 미모로도 모든 사람을 속일 순 없는 모양이야.\n' +
      '네 아들은 너를 쏙 빼닮았더군. 쿠즈노하, 나는 기뻐. 너를 닮은 그 아이 앞에서는 난 다른사람인 척 할 필요가 없어. 원래의 모습으로 만나러 갈 수 있어.\n' +
      '그 아이를 만나면, 마치 너를 만난 것 같을거야.',
    },
    {
      audio: '',
      dialogue: '쿠즈노하, 부디 날 용서해줘. 나는 네 아들에게 몹시 어려운 문제를 내야만 해.\n' +
      '솔직히 말하자면 나도 이 문제의 답이 뭔지 몰라. 아니, 답이 있는지조차도 모르겠어. 하지만 네 아들이라면 분명 만족할만한 답을 찾아낼거야.\n' +
      '너는 늘 그 아이를 자랑스러워했지.\n' +
      '쿠즈노하, 나도 언제나.... 널 자랑스럽게 생각해.\n' +
      '네가 말했던 그 운명이란 것에... 한 번이라도 좋으니 이기고 싶어. 기도해 다오, 쿠즈노하.\n' +
      '이만 줄일게.',
    },
  ]
};

// TODO: ImageStorage 를 이용해서 분리
const skins = {
  tamamo: [
    require('../assets/shikigami/skin/tamamo-skin-01.png'),
    require('../assets/shikigami/skin/tamamo-skin-02.png'),
    require('../assets/shikigami/skin/tamamo-skin-03.png'),
  ]
};

class TabShikigamiSpec extends React.Component {
  state = {
      bootstrapped: false,
  };

  componentDidMount() {
      this._bootstrap();
  }

  _bootstrap = async () => {
    const promises = skins.tamamo.map(module =>
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
      <View style={tabShikigamiSpecStyle.wrap}>
        <Text> 시작 </Text>
        <Image
          source={skins.tamamo[0]}
          style={tabShikigamiSpecStyle.image}
        />
        <Swiper
          height={300}
          width={300}
        >
          <View style={tabShikigamiSpecStyle.slide} key={1}>
            <Text> 텍스트 </Text>
          </View>
          <View style={tabShikigamiSpecStyle.slide} key={2}>
            <Image
              source={skins.tamamo[0]}
              style={tabShikigamiSpecStyle.image}
            />
          </View>
          <View style={tabShikigamiSpecStyle.slide} key={3}>
            <Image
              source={skins.tamamo[1]}
              style={tabShikigamiSpecStyle.image}
            />
          </View>
          <View style={tabShikigamiSpecStyle.slide} key={4}>
            <Image
              source={skins.tamamo[2]}
              style={tabShikigamiSpecStyle.image}
            />
          </View>
        </Swiper>
        <Text> 종료 </Text>
      </View>
    )
  }
}

const tabShikigamiSpecStyle = StyleSheet.create({
  wrap: {

  },
  slide: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: 300,
    height: 300,
  }
});

const TabShikigamiReviewList = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>DetailShikigami ReviewList</Text>
  </View>
);

const DetailShikigami = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>DetailShikigami Screen</Text>
  </View>
);

export default TabNavigator({
  Spec: {
    screen: TabShikigamiSpec,
  },
  ReviewList: {
    screen: TabShikigamiReviewList,
  }
});

//export default DetailShikigami;

//export default TabShikigamiSpec;