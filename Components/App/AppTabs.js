import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Search from './Search';
import Payment from './Payment';
import Cart from './Cart';
import HomeIcon from '../../assets/images/Home.svg';
import SearchIcon from '../../assets/images/Search.svg';
import CartIcon from '../../assets/images/Cart.svg';
import PaymentIcon from '../../assets/images/Payment.svg';
import HomeActiveIcon from '../../assets/images/HomeActive.svg';
import SearchActiveIcon from '../../assets/images/SearchActive.svg';
import CartActiveIcon from '../../assets/images/CartActive.svg';
import PaymentActiveIcon from '../../assets/images/PaymentActive.svg';

const tabs = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          padding: 20,
          elevation: 0,
          // shadowColor: 'white',
        },
      }}>
      <tabs.Screen
        component={Home}
        name="home"
        options={({route}) => ({
          title: '',
          headerLeft: () => (
            <Image
              source={require('../../assets/images/menu.png')}
              style={{height: 20, width: 20}}
              style={{
                backgroundColor: 'white',
                height: 30,
                width: 40,
                marginLeft: 10,
              }}></Image>
          ),

          headerRight: () => (
            <Image
              source={require('../../assets/images/profile.jpg')}
              style={{height: 20, width: 20}}
              style={{
                backgroundColor: 'white',
                height: 40,
                width: 40,
                borderRadius: 40,
                marginRight: 10,
              }}></Image>
          ),
          // tabBarStyle: {
          //   backgroundColor: 'red',
          // },

          tabBarIcon: ({focused}) =>
            focused ? (
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 40,
                  backgroundColor: 'green',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <HomeActiveIcon height={25} width={25}></HomeActiveIcon>
              </TouchableOpacity>
            ) : (
              <HomeIcon height={25} width={25}></HomeIcon>
            ),

          headerStyle: {
            backgroundColor: 'white',
          },
        })}></tabs.Screen>
      <tabs.Screen
        component={Search}
        name="search"
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 40,
                  backgroundColor: 'green',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <SearchActiveIcon height={25} width={25}></SearchActiveIcon>
              </TouchableOpacity>
            ) : (
              <SearchIcon height={25} width={25}></SearchIcon>
            ),
          headerShown: false,
        })}></tabs.Screen>
      <tabs.Screen
        component={Cart}
        name="cart"
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 40,
                  backgroundColor: 'green',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CartActiveIcon height={25} width={25}></CartActiveIcon>
              </TouchableOpacity>
            ) : (
              <CartIcon height={25} width={25}></CartIcon>
            ),
          headerShown: false,
        })}></tabs.Screen>
      <tabs.Screen
        component={Payment}
        name="payments"
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 40,
                  backgroundColor: 'green',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <PaymentActiveIcon height={25} width={25}></PaymentActiveIcon>
              </TouchableOpacity>
            ) : (
              <PaymentIcon height={25} width={25}></PaymentIcon>
            ),
          headerShown: false,
        })}></tabs.Screen>
    </tabs.Navigator>
  );
};

const HomeOptions = '';

export default AppTabs;
