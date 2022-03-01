import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ItemRenderTwo = ({item}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 180,
        width: 180,
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
      }}>
      {item.id === 0 ? (
        <>
          <LinearGradient
            colors={['rgba(187, 161, 25, 0)', '#057438']}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}></LinearGradient>
          <Image
            source={item.image}
            style={[
              {
                height: '60%',
                width: '90%',
                marginLeft: '10%',
                borderTopRightRadius: 20,
              },
            ]}></Image>
          <Text style={[styles.text, {color: 'white'}]}>{item.desc}</Text>
          <Text
            style={[
              styles.text,
              {color: 'white', fontSize: 18, marginBottom: 10},
            ]}>
            {item.rate}
          </Text>
        </>
      ) : (
        <>
          <Image
            source={item.image}
            style={{
              height: '60%',
              width: '90%',
              marginLeft: '10%',
              borderTopRightRadius: 20,
            }}></Image>
          <Text style={[styles.text]}>{item.desc}</Text>
          <Text style={[styles.text, {fontSize: 18, marginBottom: 10}]}>
            {item.rate}
          </Text>
        </>
      )}

      {/* 
      ) */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 14,
    // lineHeight: 16,
    color: '#7B7777',
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10,
    marginTop: 0,
  },
});

export default ItemRenderTwo;
