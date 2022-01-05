import React from "react";
import {View,Text, TouchableOpacity, Button,Image} from "react-native";
import styles from "../styles/styles";

class Sidebar extends React.Component{
    render(){
        return(
            <>
            <Image source={require('../image/imageHome.png')}></Image>
            <View style={styles.itemSidebar}>
                <Image style={styles.iconSidebar} source={require('../image/iconsNative/imageHome.png')}></Image>
                <Text style={styles.textSidebar}>Home</Text>
            </View>
            <View style={styles.itemSidebar}>
                <Image style={styles.iconSidebar} source={require('../image/iconsNative/imageProfile.png')}></Image>
                <Text style={styles.textSidebar}>My Profile</Text>
            </View>
            <View style={styles.itemSidebar}>
                <Image style={styles.iconSidebar} source={require('../image/iconsNative/imageHeart.png')}></Image>
                <Text style={styles.textSidebar}>Employee Benefit</Text>
            </View>
            <View style={styles.itemSidebar}>
                <Image style={styles.iconSidebar} source={require('../image/iconsNative/imageCart.png')}></Image>
                <Text style={styles.textSidebar}>My Requisitions</Text>
            </View>
            <View style={styles.itemSidebar}>
                <Image style={styles.iconSidebar} source={require('../image/iconsNative/imageLink.png')}></Image>
                <Text style={styles.textSidebar}>Link</Text>
            </View>
            <View style={styles.itemSidebar}>
                <Image style={styles.iconSidebar} source={require('../image/iconsNative/imagePhone.png')}></Image>
                <Text style={styles.textSidebar}>Contact Us</Text>
            </View>
            <View style={styles.itemLogout}>
            <Image style={styles.iconSidebar} source={require('../image/iconsNative/imageLogout.png')}></Image>
                <Text style={styles.textLogout}>Logout</Text>
            </View>
            </>
        );
    }
}
export default Sidebar;