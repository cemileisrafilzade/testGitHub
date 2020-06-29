import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
  } from "react-native";
import Back from '../assets/back.png'
import ChefHat from '../assets/chef.png'
export const LoginPage = ({navigation}) =>{
    return(
        <View style={styles.container}>
        <View style={styles.loginview}>
            <TouchableOpacity 
            style={{right:100}}
           onPress={() => navigation.goBack()}    >
           <Image source={Back} style={styles.backbtn} /></TouchableOpacity>
         <Text style={styles.logintxt}>Log In</Text>
           </View>
           <View style={styles.belowpart}>
<Image source={ChefHat} style={styles.chefHatImg}/>
<Text style={styles.cookeasytxt}>cookEasy</Text>
     <View style={styles.inputview}>
        <TextInput style={styles.textinput} 
        placeholder='e-mail'
         placeholderTextColor={'black'}/>
        <TextInput style={styles.textinput} 
        placeholder='password'
        placeholderTextColor={'black'} />
        </View>
         
           <TouchableOpacity style={styles.btn}
           onPress={()=>navigation.navigate('MAINPAGE')}
           >
               <Text style={styles.btntxt}>LOG IN</Text>
           </TouchableOpacity> 
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#483D8B',
    paddingHorizontal:24,
paddingVertical:'10%'
},
loginview:{
    flexDirection:'row',
alignItems:'center',
paddingBottom:15,
justifyContent:'center',
},
logintxt:{
    color:"white",
   fontSize:45,
   fontWeight:'bold' 
},
backbtn:{
    width:27,
    height:27,
    // right:90
  
},
belowpart:{
   paddingVertical:40,
    backgroundColor:'white',
    borderRadius:40,
    alignItems:'center',
    // paddingHorizontal:30
},
chefHatImg:{
    width:60,
    height:60,
    // marginTop:55
},
cookeasytxt:{
    fontSize:48,
    color:"#483D8B",
    fontWeight:'bold',


},
inputview:{
    paddingVertical:40
},
textinput:{
    width:300,
    backgroundColor:"#D9D9D9",
    marginBottom:24,
    height:60,
    borderRadius:15,
  fontSize:20,
  paddingHorizontal:15,
},
btn:{
width:'70%',
    height:61,
    backgroundColor:'#E4BD30',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
},
btntxt:{
    fontSize:25,
    color:'white',
    fontWeight:'bold'
}


})