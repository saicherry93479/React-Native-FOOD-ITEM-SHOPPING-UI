import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeSvg from '../../assets/images/Home.svg';
import TextOne from './TextOne';
import SearchIcon from '../../assets/images/Search.svg';
import {CONSTANTS} from '../Utils/Constants';
import LinearGradient from 'react-native-linear-gradient';
import {CategoriesData, Popular} from '../Utils/Data';
import FruitsSvg from '../../assets/images/FruitsImage.svg';
import ItemRenderTwo from './ItemRenderTwo';

const gradients = [
  {
    colorOne: '#26DBE7',
    colorTwo: '#7B86EE',
    text: 'Disconunts',
  },
  {
    colorOne: '#E78E26',
    colorTwo: '#7B86EE',
    text: 'LowPrice',
  },
  {
    colorOne: '#D726E7',
    colorTwo: '#7B86EE',
    text: 'HighPrice',
  },
];

const SelectRender = () => (
  <View
    style={[
      {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
      },
    ]}>
    {gradients.map((item, index) => (
      <LinearGradient
        colors={[item.colorOne, item.colorTwo]}
        key={index}
        start={{x: 0.5, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={[
          {
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 10,
          },
        ]}>
        <Text style={{fontFamily: 'MontserratAlternates-Medium'}}>
          {item.text}
        </Text>
      </LinearGradient>
    ))}
  </View>
);

const itemRender = ({item}) => (
  <View
    style={{
      backgroundColor: 'white',
      height: 120,
      width: 120,
      marginRight: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',

      marginTop: 10,
      marginBottom: 10,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
      marginLeft: item.id === 0 ? 2 : 0,
      borderColor: item.id === 0 ? '#057438' : 'white',
      borderWidth: 2.5,
    }}>
    <Text
      style={[
        {
          color: 'black',
          fontSize: 14,
          lineHeight: 16,
          color: '#7B7777',
          fontFamily: 'Montserrat-Medium',
          marginLeft: 10,
          marginTop: 5,
        },
      ]}>
      {item.name}
    </Text>
    {item.image ? (
      <Image
        source={item.image}
        style={{height: '70%', width: '100%', borderRadius: 20}}></Image>
    ) : (
      <FruitsSvg height="70%" width="100%" />
    )}
  </View>
);
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor={'white'} />
      <TextOne header={'Choose  Food'} subHeader={'what u like most'} />
      <TouchableOpacity onPress={() => navigation.navigate('search')}>
        <View style={[styles.searchBar, {marginTop: 30}]}>
          <SearchIcon width={25} height={25} />
          <Text
            style={[
              {
                fontSize: CONSTANTS.fontSizeDeafault,
                color: '#999197',
                marginLeft: 30,
                lineHeight: 19,
                fontFamily: 'Montserrat-Light',
              },
            ]}>
            search for varities
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{marginTop: 30}}>
        <Text style={[styles.subHeader]}>Categories</Text>
        <FlatList
          data={CategoriesData}
          renderItem={itemRender}
          horizontal
          showsHorizontalScrollIndicator
          style={[{marginTop: 20}]}></FlatList>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={[styles.subHeader, {}]}>Popular Sales Today</Text>
        <FlatList
          data={Popular}
          renderItem={ItemRenderTwo}
          horizontal
          style={[{marginTop: 20}]}></FlatList>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={[styles.subHeader, {}]}>Select From</Text>
        <SelectRender></SelectRender>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    // height: CONSTANTS.height,
    height: '100%',
  },
  searchBar: {
    backgroundColor: 'rgba(227, 222, 222, 0.41)',
    borderRadius: 10,
    // paddingLeft: 50,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 10,
  },
  subHeader: {
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: CONSTANTS.fontSizeSecondary,
    color: 'black',
  },
});

export default Home;
