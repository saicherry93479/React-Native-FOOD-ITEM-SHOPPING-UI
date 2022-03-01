import React from 'react';
import {FlatList, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {PAYMENTDATA} from '../Utils/Data';
import TextOne from './TextOne';
import imageSucess from '../../assets/images/PaymentSucess.png';
import imageCancel from '../../assets/images/PaymentCancel.png';

const itemRender = ({item}) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderRadius: 15,
      backgroundColor: item.payment ? '#69E5B9' : '#E5AC69',
      // marginHorizontal: 5,
      marginBottom: 20,
      marginTop: item.first ? 15 : 0,
      alignItems: 'center',
    }}>
    <View>
      <Text
        style={{fontFamily: 'Montserrat-Medium', fontSize: 18, color: 'white'}}>
        Payment id :
      </Text>
      <Text>{item.id}</Text>
    </View>
    <Image
      source={item.payment ? imageSucess : imageCancel}
      style={{height: 30, width: 30, borderRadius: 30}}></Image>
  </View>
);

const Payment = () => {
  return (
    <View style={[styles.container]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'white'}
        translucent
      />
      <TextOne header={'Payments'} subHeader={'trusted payments'} />
      <FlatList data={PAYMENTDATA} renderItem={itemRender}></FlatList>
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
});
export default Payment;
