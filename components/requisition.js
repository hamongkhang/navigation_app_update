import React from "react";
import {View,Text, TouchableOpacity, Button} from "react-native";
import styles from "../styles/styles";
import Header from "./header";
import Footer from "./footer";
function Requisition({navigation}){
        return(
            <View style={styles.container}>
            <View style={styles.backgroundHome}>
                <Text>Requisition Screen</Text>
             </View>
            <Footer navigation={navigation}></Footer>
         </View>
        );
    }
export default Requisition;