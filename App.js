import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home';
import Likes from './screens/Likes';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        title: '',
        headerShown: false,
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: () => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={"#FF7575"}
              />
            );
          },
        }} />

        <Tab.Screen name="Likes" component={Likes} options={{
          tabBarIcon: () => {
            return (
              <Ionicons
                name="md-heart"
                size={24}
                color={"#FF7575"}
              />
            );
          },
        }} />

        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: () => {
            return (
              <Ionicons
                name="md-person"
                size={24}
                color={"#FF7575"}
              />
            );
          },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
