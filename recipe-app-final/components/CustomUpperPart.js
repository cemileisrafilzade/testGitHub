import React from 'react'
import {View,
StyleSheet,
Image,
Text,
TouchableOpacity,
} from 'react-native'
import Back from '../assets/back.png'
export  const UpperPart = (props) =>{
    return(
        <View style={styles.container}>
<TouchableOpacity style={styles.back}>
<Image  source={Back}/></TouchableOpacity>
<Text style={styles.txt}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    backgroundColor:"#E4BD30",
    borderBottomLeftRadius:70,
    borderBottomRightRadius:70,
    alignItems:'center',
    flexDirection:'row',
paddingTop:30,
paddingBottom:30,
justifyContent:"center"
},
txt:{
color:'white',
fontSize:30,
fontWeight:"bold",


},
// back:{
//     left:-120
// }
})