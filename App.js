import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import SettingsScreen from './settings';
import BookingScreen from './booking';

const tabNavigator = createBottomTabNavigator({
  'Audi RS3': HomeScreen,
  'Audi TTRS': AboutScreen,
  'Audi R8': SettingsScreen,
  'Book A Service': BookingScreen
})

export default createAppContainer (tabNavigator)