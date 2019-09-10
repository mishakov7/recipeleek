import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import InputScreen from '../screens/InputScreen/InputScreen';
import RecipeScreen from '../screens/RecipeScreen/RecipeScreen';
/*****************************************/
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};
/*****************************************/
const InputStack = createStackNavigator({
  Input: InputScreen,
});

InputStack.navigationOptions = {
  tabBarLabel: 'Get Recipe',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};
/*****************************************/
// We don't want this to be a link on the bottom tab navigation
const RecipeStack = createStackNavigator({
  Recipe: RecipeScreen,
});

/*****************************************/
export default createBottomTabNavigator({
  HomeStack,
  InputStack,
});
