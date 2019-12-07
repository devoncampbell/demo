import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import firebase from 'firebase';

import SignUp from './signup';
import HomeScreen from './home';
import SettingsScreen from './settings';
import BookingScreen from './booking';
import AboutScreen from './about';

const tabNavigator = createBottomTabNavigator({
  'SignUp': SignUp,
  'Home': HomeScreen,
  'Shop': AboutScreen,
  'Book A Service': BookingScreen,
  'Settings': SettingsScreen,
})

export default createAppContainer (tabNavigator)