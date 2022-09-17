import { Text, StyleSheet, View, Settings, DevSettings } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './src/Login'
import Home from './src/Home'
import Setting from './src/Settings'
import User from './src/User'
import MySettings from './src/Settings'

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        initialRoutName={Home}
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size}) =>{
          let iconName;
          let rn= route.name;

          if (rn===Home){
            iconName = focused ? 'home' : 'home-outline'
          } else  if (rn===User){
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          else  if (rn===MySettings){
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return 

        },
        })}
   
        >
        <Tab.Screen  name="LogOut" component={Login} options={{headerShown:false, tabBarStyle: { display: "none" }}} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="User" component={User} />
        <Tab.Screen  name="MySettings" component={MySettings}/>
        </Tab.Navigator>
      </NavigationContainer>
    
    )
  }     
}

