import React from "react";
import {View,Text,Image, TouchableOpacity, Button} from "react-native";
import styles from "../styles/styles";
import Header from "./header";
import Footer from "./footer";

function Home({navigation}){
        return(
                <View style={styles.container}>
                <View style={styles.backgroundHome}>
                    <Text>Home Screen</Text>
                 </View>
                <Footer navigation={navigation}></Footer>
             </View>
        );
}
export default Home;
