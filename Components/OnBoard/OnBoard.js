import React, {useLayoutEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  FlatList,
  Dimensions,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../Utils/Colors';
import {CONSTANTS} from '../Utils/Constants';
import {OnBoardData} from '../Utils/Data';

const barStyleColors = [
  COLORS.onBoardOnePrimary,
  COLORS.onBoardTwoPrimary,
  COLORS.onBoardThreePrimary,
  COLORS.onBoardFourPrimary,
];
const headerColors = [
  COLORS.onBoardOneTextPrimary,
  COLORS.onBoardTwoTextPrimary,
  COLORS.onBoardThreeTextPrimary,
  COLORS.onBoardFourTextPrimary,
];

// app satrts ########################################################
const OnBoard = ({navigation}) => {
  const [barStyleColor, setBarStyleColor] = useState(0);

  const ref = useRef(null);

  // hadler for going to next page #######################
  const nextHandler = () => {
    // console.log('current page is ', currentPage);
    if (barStyleColor < 3) {
      const nextPage = barStyleColor + 1;
      const offset = nextPage * CONSTANTS.width;
      ref?.current?.scrollToOffset({offset});
      setBarStyleColor(nextPage);
    }
  };

  // hadler for going to home page ############################
  const navigationHome = () => {
    console.log('oisdiocoi');
    navigation.navigate('apphero');
  };

  // RENDER ITEM for flat list ########################################
  const itemRender = ({item}) => (
    <View style={[styles.item, {backgroundColor: barStyleColors[item.id]}]}>
      <View style={{height: CONSTANTS.height * 0.5, width: CONSTANTS.width}}>
        <LinearGradient
          colors={[item.gradientOneColor, item.gradientTwoColor]}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          locations={item.locations}
          style={styles.linearGradient}></LinearGradient>
        <Image
          source={item.image}
          style={{resizeMode: 'cover', height: '100%'}}></Image>
      </View>
      <View style={[styles.onBoardInfo]}>
        <Text
          style={[
            styles.heading,
            {color: headerColors[item.id], textAlign: item.textAlign},
          ]}>
          {item.heading}
        </Text>
        <Text style={[styles.subHeading, {textAlign: item.textAlign}]}>
          {item.subHaeding}
        </Text>
      </View>
      <View
        style={[
          styles.itemFooter,
          {justifyContent: item.id === 0 ? 'flex-end' : 'center'},
        ]}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: item.buttonColor}]}
          onPress={item.id < 3 ? nextHandler : navigationHome}>
          <Text
            style={{
              fontFamily: 'MontserratAlternates-SemiBold',
              letterSpacing: 4,
              fontSize: 16,
              color: item.id === 3 ? 'black' : 'white',
            }}>
            {item.buttonText}
          </Text>
        </TouchableOpacity>
        <View style={[styles.carsoul, {marginBottom: item.id !== 0 ? 23 : 0}]}>
          <View
            style={[
              styles.carsoulItem,
              {
                backgroundColor:
                  barStyleColor === 0 ? item.buttonColor : '#BCB3B3',
                borderRadius: 20,
              },
            ]}></View>
          <View
            style={[
              styles.carsoulItem,
              {
                backgroundColor:
                  barStyleColor === 1 ? item.buttonColor : '#BCB3B3',
                borderRadius: 20,
              },
            ]}></View>
          <View
            style={[
              styles.carsoulItem,
              {
                backgroundColor:
                  barStyleColor === 2 ? item.buttonColor : '#BCB3B3',
                borderRadius: 20,
              },
            ]}></View>
          <View
            style={[
              styles.carsoulItem,
              {
                backgroundColor:
                  barStyleColor === 3 ? item.buttonColor : '#BCB3B3',
                borderRadius: 20,
              },
            ]}></View>
        </View>
      </View>
    </View>
  );

  // SCROLL HANDLER for updating the barstyle ######################################
  const scrollMomentumHandler = e => {
    // setBarStyleColor(p => p + 1);
    const current = Math.round(e.nativeEvent.contentOffset.x / CONSTANTS.width);
    setBarStyleColor(current);
  };

  // rendder ############################
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"></StatusBar>
      <View style={[styles.slider]}>
        <FlatList
          data={OnBoardData}
          onMomentumScrollEnd={scrollMomentumHandler}
          renderItem={itemRender}
          pagingEnabled
          ref={ref}
          showsHorizontalScrollIndicator={false}
          horizontal></FlatList>
      </View>
    </SafeAreaView>
  );
};

// styles #################################

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: '100%',
    // backgroundColor: 'red',
  },
  slider: {
    height: '100%',
    backgroundColor: 'red',
  },
  footer: {
    height: '100%',
  },

  // item render cssss ###########################################
  item: {
    width: Dimensions.get('window').width,
  },
  linearGradient: {
    height: '100%',
    width: '100%',

    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 20,
    opacity: 1,
  },
  onBoardInfo: {
    padding: CONSTANTS.width * 0.12,
    // backgroundColor: 'red',
  },
  heading: {
    fontSize: CONSTANTS.fontSizePrimary,
    fontFamily: 'MontserratAlternates-Medium',
    fontWeight: '500',
    lineHeight: 35,
    // textAlign: 'center',
  },
  subHeading: {
    fontSize: CONSTANTS.fontSizeDeafault,
    color: COLORS.onBoardTextSecondary,
    lineHeight: 23,
    fontFamily: 'MontserratAlternates-Light',
    marginTop: CONSTANTS.height * 0.02,
  },
  itemFooter: {
    height: CONSTANTS.height * 0.3,
    // backgroundColor: 'red',
    display: 'flex',

    padding: CONSTANTS.width * 0.12,
  },
  button: {
    borderRadius: 15,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  carsoul: {
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  carsoulItem: {
    height: 7,
    width: 7,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#BCB3B3',
  },
});

export default OnBoard;
