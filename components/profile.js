import React from "react";
import {View,Text, TouchableOpacity, Button} from "react-native";
import styles from "../styles/styles";
import Header from "./header";
import Footer from "./footer";
function Profile({navigation}){
        return(
            <View style={styles.container}>
            <View style={styles.profileContainer}>
                 <View style={styles.itemProfile}>
                     <Text style={styles.titleProfile}>Name</Text>
                     <Text style={styles.itemContent}>Nguyen Pham</Text>
                 </View>
                 <View style={styles.itemProfile}>
                     <Text style={styles.titleProfile}>Email</Text>
                     <Text style={styles.itemContent}>hamongkhang@gmail.com</Text>
                 </View>
                 <View style={styles.itemProfile}>
                     <Text style={styles.titleProfile}>Employeed</Text>
                     <Text style={styles.itemContent}>Geotech Pty Ltd</Text>
                 </View>
             </View>
            <Footer navigation={navigation}></Footer>
         </View>
        );
}
export default Profile;