import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import TextOne from './TextOne';
import SearchIcon from '../../assets/images/Search.svg';
import {CONSTANTS} from '../Utils/Constants';
import CancelImage from '../../assets/images/Cancel.png';

const SearchData = [
  {
    color: '#E5AD78',
    width: 130,
    name: 'tomato',
  },
  {
    color: '#B6E578',
    width: 200,
    name: 'Collard Greens',
  },
  {
    color: '#6AE3E3',
    width: 190,
    name: 'Collard Greens',
  },
  {
    color: 'violet',
    width: 100,
    name: 'grapes',
  },
  {
    color: 'orange',
    width: 100,
    name: 'Carrot',
  },
];

const SearchItems = () => (
  <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    {SearchData.map((item, index) => (
      <View
        key={index}
        style={[
          {
            backgroundColor: item.color,
            width: item.width,
            height: 35,
            marginRight: 20,
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: 10,
            flexDirection: 'row',
          },
        ]}>
        <Text>{item.name}</Text>
        <Image source={CancelImage} style={{height: 10, width: 10}}></Image>
      </View>
    ))}
  </View>
);
const Search = () => {
  return (
    <SafeAreaView style={[styles.container, {}]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'white'}
        translucent
      />
      <TextOne header="Choose Food" subHeader={'what u like most'} />
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
      <Text
        style={[
          {
            fontSize: 14,
            color: '#999197',
            marginTop: 10,
            fontFamily: 'Montserrat-Regular',
          },
        ]}>
        recent searches
      </Text>
      <SearchItems />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: 'white',
    height: '100%',
  },
  searchBar: {
    backgroundColor: 'rgba(200, 236, 238, 0.41);',
    borderRadius: 10,
    // paddingLeft: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

export default Search;
