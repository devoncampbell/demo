import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import SettingsScreen from './settings';

const tabNavigator = createBottomTabNavigator({
  'Audi RS3': HomeScreen,
  'Audi TTRS': AboutScreen,
  'Audi R8': SettingsScreen
})

export default createAppContainer (tabNavigator)