import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import {NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Login from "./components/loginScreen/LoginScreen"
import Home from "./components/MenuScreen/Home.js"
import Video from "./components/VideoScreen/VideoScreen"
import settings from "./components/SettingsScreen/SettingsScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const MyTabs = () =>{

  return (

    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#17202A',
      tabBarActiveBackgroundColor: '#f00',
      tabBarInactiveBackgroundColor: '#f00',
      tabBarStyle: { height: 60 }
    }}>
      <Tab.Screen 
          name="Listado" 
          component={Home} 
          options={{
            headerShown: false,
            tabBarLabel: 'Lista',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="view-list" color={color} size={30} />
            ),}}/>
    <Tab.Screen 
          name="Video" 
          component={Video} 
          options={{headerShown: false,
            tabBarLabel: 'Video',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="video" color={color} size={30} />
            ),}}/>
    <Tab.Screen 
          name="Settings" 
          component={settings} 
          options={{headerShown: false,
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-settings-outline" color={color} size={30} />
            ),}}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={MyTabs}
          options={{ 
            headerLeft: null, 
            headerShown: false,
            headerStyle: {backgroundColor:"red"}}}/>
        
      </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text:{
    fontSize:30
  }
});
export default App