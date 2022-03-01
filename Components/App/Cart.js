import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {CONSTANTS} from '../Utils/Constants';
import {CartDetails} from '../Utils/Data';
import ItemRenderTwo from './ItemRenderTwo';
import TextOne from './TextOne';

const Num = ({data}) => (
  <View style={{display: 'flex', flexDirection: 'row'}}>
    <View style={[styles.box, {}]}>
      <Text style={{color: 'black'}}>-</Text>
    </View>
    <View style={[styles.box, {}]}>
      <Text style={{color: 'black'}}>{data}</Text>
    </View>
    <View style={[styles.box, {}]}>
      <Text style={{color: 'black'}}>+</Text>
    </View>
  </View>
);

const itemRender = ({item}) => (
  <View style={[styles.itemContainer, {marginTop: item.id === 0 ? 20 : 0}]}>
    <Image
      source={item.image}
      style={{
        flexBasis: '50%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}></Image>
    <View
      style={[
        {
          marginLeft: 10,
          flexBasis: '55%',
          marginTop: 10,
          justifyContent: 'space-evenly',
        },
      ]}>
      <Text
        style={[
          {
            color: 'black',
            fontSize: 18,
            lineHeight: 22,
            fontFamily: 'Montserrat-Medium',
          },
        ]}>
        {item.name}
      </Text>
      <View
        style={{
          justifyContent: 'space-evenly',
          // backgroundColor: 'red',
          flex: 1,
        }}>
        <View
          style={[
            {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Num data={item.items}></Num>
          <Text
            style={[
              {
                fontSize: 16,
                fontFamily: 'Montserrat-Medium',
                color: '#6A6464',
                marginRight: 40,
              },
            ]}>
            {item.price}
          </Text>
        </View>

        <Text
          style={[
            {
              fontSize: 12,
              fontFamily: 'Montserrat-Medium',
              color: '#6A6464',
              letterSpacing: 2,
            },
          ]}>
          {item.time}
        </Text>
        <View
          style={[
            {
              width: '100%',
              display: 'flex',
              // backgroundColor: 'yellow',
              alignItems: 'flex-end',
              // marginTop: 5,
            },
          ]}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: item.paid ? 'lightgreen' : 'pink',
                // width: '60%',
                paddingHorizontal: 16,
                paddingVertical: 5,
                borderRadius: 20,
                marginRight: 30,
                // marginTop: 10,
              },
            ]}>
            {item.paid ? (
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: 'white',
                    fontFamily: 'Montserrat-Medium',
                  },
                ]}>
                Payment Done
              </Text>
            ) : (
              <Text
                style={[
                  {
                    fontSize: 14,
                    color: 'white',
                    fontFamily: 'Montserrat-Medium',
                  },
                ]}>
                Proceed To pay
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);
const Cart = () => {
  return (
    <View style={[styles.container]}>
      <StatusBar
        backgroundColor={'white'}
        translucent
        barStyle="dark-content"
      />
      <View>
        <Text style={[styles.header, {}]}>Added Items to Cart</Text>
        <Text style={[styles.subHeader]}>do payment and get delivered</Text>
      </View>
      <FlatList
        data={CartDetails}
        renderItem={itemRender}
        style={{
          padding: 0,
          backgroundColor: 'white',
          marginTop: 20,
        }}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: 'white',
    height: '100%',
  },
  subHeader: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: CONSTANTS.fontSizeDeafault,
    color: '#999197',
    lineHeight: 19,
    marginTop: 5,
  },
  header: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 23,
    letterSpacing: 2,
    lineHeight: 30,
    color: 'black',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 180,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 5,
  },
  box: {
    borderColor: 'tomato',
    borderWidth: 1,
    width: 28,
    height: 28,
    display: 'flex',
    textAlign: 'center',
    // textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Cart;
