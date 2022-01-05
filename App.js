import Link from "./components/link";
import Contact from "./components/contact";
import Benefit from "./components/benefit";
import Profile from "./components/profile";
import Requisition from "./components/requisition";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/home";
import MainScreen from "./components/MainScreen";
import Header from "./components/header";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from "./components/sidebar";
const Drawer=createDrawerNavigator();

const Stack=createNativeStackNavigator();

function App() {
  return (
//     <NavigationContainer>
//     <Stack.Navigator initialRouteName="MainScreen">
//         <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
//         <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} /> 
//         <Stack.Screen options={{headerShown: false}} name="Contact" component={Contact} /> 
//         <Stack.Screen options={{headerShown: false}} name="Requisition" component={Requisition} /> 
//         <Stack.Screen options={{headerShown: false}} name="Benefit" component={Benefit} /> 
//         <Stack.Screen options={{headerShown: false}} name="Link" component={Link} /> 
//         <Stack.Screen options={{headerShown: false}} name="MainScreen" component={MainScreen} />
//     </Stack.Navigator>
// </NavigationContainer>
<Header></Header>
  );
}

export default App;