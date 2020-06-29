import React from 'react'
import {View,
StyleSheet,
Image,
Text,
TouchableOpacity,
} from 'react-native'
import Back from '../assets/back.png'
import Homepage from '../assets/homepg.png'
import Add from '../assets/plus.png'
import User from '../assets/user.png'
import { useNavigation } from "@react-navigation/native";

export  const BelowPart = ({navigation}) => {
    return(
        <View style={styles.container}>
<TouchableOpacity 
onPress={()=>navigation.navigate("MAINPAGE")}

>
    <Image source={Homepage}/></TouchableOpacity>
<TouchableOpacity>
    <Image source={Add}/></TouchableOpacity>
  <TouchableOpacity>
    <Image source={User}/></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    backgroundColor:"#E4BD30",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    alignItems:'center',
    flexDirection:'row',
paddingTop:15,
paddingBottom:15,
justifyContent:"space-around",

},

})