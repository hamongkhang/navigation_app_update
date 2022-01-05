import React from "react";
import {View,Text,Image, TouchableOpacity, Button} from "react-native";
import styles from "../styles/styles";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";

function MainScreen({navigation}){
        return(
                <View style={styles.container}>
                <Header></Header>
                <View style={styles.backgroundHome}>
                    <Text>Home Screen</Text>
                 </View>
                <Footer navigation={navigation}></Footer>
             </View>
        );
}
export default MainScreen;
