import React, { useState } from 'react'
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
import { Link } from '@react-navigation/native';
export const SignInPage = ({navigation}) =>{
    
    const [fileds,setFields] = useState({
        email:{value:'',label:"Email"},
        password:{value:'Password',},
        repassword:{value:'',label:'Repeat Password',hideOnLogin:true},
    
    })
    const [isAgree,setIsAgree] = useState(false);
    const toggleIsAgree = () => setIsAgree(v=>!v);

    
    return(
        <View style={styles.container}>
        <View style={styles.loginview}>
            <TouchableOpacity 
            style={{right:100}}
           onPress={() => navigation.goBack()}    >
           <Image source={Back} style={styles.backbtn} /></TouchableOpacity>
         <Text style={styles.logintxt}>Sign In</Text>
           </View>
           <View style={styles.belowpart}>
 
     <View style={styles.inputview}>
     <TextInput style={styles.textinput} 
        placeholder='username'
         placeholderTextColor={'black'}/>
        <TextInput style={styles.textinput} 
        placeholder='e-mail'
        placeholderTextColor={'black'} />
        <TextInput style={styles.textinput} 
        placeholder='password'
         placeholderTextColor={'black'}/>
        <TextInput style={styles.textinput} 
        placeholder='confirm password'
        placeholderTextColor={'black'} />
        </View>
        <View style={{flexDirection:'row',marginBottom:10}}>
         <TouchableOpacity onPress={toggleIsAgree}>
             <View style={[styles.checkbox,{
                 backgroundColor: isAgree?"#E4BD30":"#D9D9D9",
             }]}/>
         </TouchableOpacity>
         <Text>agree with </Text>
             <TouchableOpacity
            //   onPress={Link} 
            >
             <Text style={{fontWeight:'bold'}}>  Terms and Conditions</Text></TouchableOpacity>
         </View>
           <TouchableOpacity
           onPress={() => navigation.navigate('MAINPAGE')}
           style={styles.btn}>
               <Text style={styles.btntxt} >CREATE</Text>
           </TouchableOpacity> 
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#4689D3',
    paddingHorizontal:24,
    paddingVertical:'8%'
},
loginview:{
    flexDirection:'row',
alignItems:'center',
// paddingBottom:21,
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
    marginTop:'5%',
   paddingVertical:20,
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
    paddingVertical:35
},
textinput:{
    width:300,
    backgroundColor:"#D9D9D9",
    marginBottom:20,
    height:60,
    borderRadius:15,
  fontSize:20,
  paddingHorizontal:15,
},
btn:{
    width:'80%',
    height:60,
    backgroundColor:'#E4BD30',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
},
btntxt:{
    fontSize:25,
    color:'white',
    fontWeight:'bold'
},
checkbox:{
//    backgroundColor: "#D9D9D9",
   width:25,
   height:25,
   marginRight:10,
   borderRadius:5
}


})