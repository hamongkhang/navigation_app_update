import React from "react";
import {View,Text, TouchableOpacity, Button} from "react-native";
import styles from "../styles/styles";
import Header from "./header";
import Footer from "./footer";
function Benefit({navigation}){
        return(
            <View style={styles.container}>
            <View style={styles.backgroundHome}>
                <Text>Benefit Screen</Text>
             </View>
            <Footer navigation={navigation}></Footer>
         </View>
        );
    }
export default Benefit;