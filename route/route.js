import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../components/home";
import Link from "../components/link";
import Contact from "../components/contact";
import Benefit from "../components/benefit";
import Profile from "../components/profile";
import Requisition from "../components/requisition";
import Footer from "../components/footer";
import Header from '../components/header';
import Sidebar from '../components/sidebar';
const Stack=createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} /> 
                <Stack.Screen name="Contact" component={Contact} /> 
                <Stack.Screen name="Requisition" component={Requisition} /> 
                <Stack.Screen name="Benefit" component={Benefit} /> 
                <Stack.Screen name="Link" component={Link} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;