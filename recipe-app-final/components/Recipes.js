import React from 'react'
import {View,StyleSheet, Image,Text,TouchableOpacity,} from 'react-native'
import YellowStar from '../assets/yellowstar.png'
import EmptyStar from '../assets/emptystar.png'
import Cooker from '../assets/cooker.png'


export const Recipe = (props) =>{
    return(
        <View style={styles.container} >
<View style={{flexDirection:'row',alignItems:'center'}}>
<Image source={props.imgsrc} style={styles.mealimg}/>
    <Text style={styles.mealname}>{props.title}</Text></View>
<View style={{flexDirection:'row',
alignItems:'center'}}>
    <Image source={YellowStar} />
    <Image source={YellowStar} />
    <Image source={YellowStar} />
    <Image source={YellowStar} />
    <Image source={EmptyStar} />

<Image source = {props.cookerimg} style={styles.img} /></View>
        </View>
    )
} 
const styles = StyleSheet.create({
container:{
 marginTop:20,
 marginBottom:20,
borderColor:'#E4BD30',
borderRadius:20,
borderWidth:4,
paddingHorizontal:20,
paddingVertical:15,
maxWidth:'95%',
minWidth:'85%'

},
img:{
    marginLeft:'30%',
    width:60,
    height:60,

},
mealimg:{
    borderWidth:3,
    borderColor:'#E4BD30',
    borderRadius:20,
    width:110,
    height:110,
    marginRight:20
} ,
mealname:{
    fontSize:23
}  

})