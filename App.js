
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fbScreen from './screens/fbScreen';
import instaScreen from './screens/instaScreen';
import {createAppContainer } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default class App extends React.Component {
  render(){
  return (
  <AppContainer/>
  );
  }
}

const TabNavigator=createBottomTabNavigator({
  fb:{screen:fbScreen},
  insta:{screen:instaScreen}
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
