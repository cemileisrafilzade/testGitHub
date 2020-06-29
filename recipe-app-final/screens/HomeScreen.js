import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
  } from "react-native";

import Meal from '../assets/meal.png'

  import { useNavigation } from "@react-navigation/native";
// // import {LinearGradient} from 'expo-linear-gradient';
// import Drawer from '../assets/Group.png'
export const HomeScreen = ({navigation}) => {
return(
    <View style={styles.container}>
        <View style={styles.upperpart}>
<Text style={styles.headertext}>cookEasy</Text>
<Image style={styles.main_img} source={Meal}/>
</View>
<View style={styles.belowpart}>
<Text style={styles.text2}>For learning new recipes,Let's start</Text>
<TouchableOpacity style={styles.createbtn} 
onPress={() => navigation.navigate('SIGNINPAGE')}
>
  <Text style={styles.btntxt}>create account </Text>
</TouchableOpacity>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:26}}>already have,</Text>
<TouchableOpacity
onPress={() => navigation.navigate('LOGINPAGE')}
>
   <Text style={{fontSize:26,fontWeight:'bold'}}>log in</Text>
    </TouchableOpacity></View></View>
</View>
)
}

const styles = StyleSheet.create({
container:{
    backgroundColor:'white',
    flex:1,
    // alignItems:'center',

},
upperpart:{
    backgroundColor:'#E4BD30',
    borderBottomRightRadius:200,
    borderBottomLeftRadius:200,
    alignItems:'center',
    paddingTop:'5%'
},
main_img:{
    width:300,
    height:300,

},
createbtn:{
    backgroundColor:'#C90808',
    width:'80%',
    height:70,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
marginVertical:20

},
headertext:{
  color:'white',
  fontWeight:'bold',
  fontSize:48
},
text2:{
  fontSize:36,
  textAlign:"center"
},
btntxt:{
  color:"#F4F8FC",
  fontSize:30

},
belowpart:{
  alignItems:'center',
}

})