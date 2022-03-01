import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoard from './Components/OnBoard/OnBoard';
import AppTabs from './Components/App/AppTabs';

const stack = createNativeStackNavigator();
const onBoardName = 'onBoardHome';
const appName = 'apphero';

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name={onBoardName}
          options={{headerShown: false}}
          component={OnBoard}
        />
        <stack.Screen
          name={appName}
          component={AppTabs}
          options={{headerShown: false}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
