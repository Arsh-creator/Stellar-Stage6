import * as React from 'react';
import { StyleSheet } from 'react-native';

import DailyPic from "./screens/DaliyPic";
import SpaceCrafts from "./screens/SpaceCrafts";
import StarMap from "./screens/StarMap";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'

export default class App extends React.Component{
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName= 'Home'
      screenOptions= {{headerShown: false}}>
      <Stack.Screen
       name = 'Home'
       component= {Home}/>
      <Stack.Screen
       name = 'DailyPic'
       component= {DailyPic}/>
       <Stack.Screen
       name = 'SpaceCrafts'
       component= {SpaceCrafts}/>
       <Stack.Screen
       name = 'StarMap'
       component= {StarMap}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
const Stack = createStackNavigator()