import Link from "../components/link";
import Contact from "../components/contact";
import Benefit from "../components/benefit";
import Profile from "../components/profile";
import Requisition from "../components/requisition";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../components/home";
import MainScreen from "../components/MainScreen";

import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from "../components/sidebar";
const Drawer=createDrawerNavigator();

function Header() {
        return (
                <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                  <Drawer.Screen name="Home" component={Home} />
                  <Drawer.Screen  name="Profile" component={Profile} /> 
                  <Drawer.Screen  name="Contact" component={Contact} /> 
                  <Drawer.Screen  name="Requisition" component={Requisition} /> 
                  <Drawer.Screen name="Benefit" component={Benefit} /> 
                  <Drawer.Screen  name="Link" component={Link} /> 
                  </Drawer.Navigator>
              </NavigationContainer>
        );
      }
export default Header;