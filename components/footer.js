import * as React from 'react';
import {View, Text, TouchableOpacity, Button, Image} from 'react-native';
import styles from "../styles/styles";

function Footer({ navigation }) {    
    return(
             <View style={styles.footer}>
             <TouchableOpacity onPress={()=>navigation.navigate('Home')}> 
             <View style={styles.itemFooter}>
             <Image style={styles.iconFooter} source={require('../image/iconsNative/imageHome.png')}></Image>
             <Text style={styles.textFooter}>Home</Text>
             </View>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>navigation.navigate('Benefit')}> 
             <View style={styles.itemFooter}>
             <Image style={styles.iconFooter} source={require('../image/iconsNative/imageSetting.png')}></Image>
             <Text style={styles.textFooter}>Plant</Text>
             </View>
             </TouchableOpacity>


             <TouchableOpacity onPress={()=>navigation.navigate('Requisition')}> 
             <View style={styles.itemFooter}>
             <Image style={styles.iconFooter} source={require('../image/iconsNative/imageEvent.png')}></Image>
             <Text style={styles.textFooter}>Site Event</Text>
             </View>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>navigation.navigate('Link')}> 
             <View style={styles.itemFooter}>
             <Image style={styles.iconFooter} source={require('../image/iconsNative/imageLink.png')}></Image>
             <Text style={styles.textFooter}>Link</Text>
             </View>
             </TouchableOpacity>


             <TouchableOpacity onPress={()=>navigation.navigate('Contact')}> 
             <View style={styles.itemFooter}>
             <Image style={styles.iconFooter} source={require('../image/iconsNative/imagePhone.png')}></Image>
             <Text style={styles.textFooter}>Contact</Text>
             </View>
             </TouchableOpacity>

             </View>
     );
}
export default Footer;