import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import { UpperPart, RedBtn, BelowPart, Textinput  } from '../components';

 export const Settings = () =>{
     return(
         <View style={{backgroundColor:'white'}} >
         <UpperPart title='USER SETTINGS'/>
        <View style={styles.container}>
         <Image 
          style={styles.img} />
          <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>EDIT PHOTO</Text>
          </TouchableOpacity>
          <Text style={styles.txt}>name</Text>
          <Textinput/>
          <Text style={styles.txt}>e-mail</Text>
          <Textinput/>
          <RedBtn title='CREATE' />
          </View>
          <BelowPart/>
          
                  </View>
     )
 } 
 const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    alignItems:"center",
    paddingTop:'5%',
    flex:0,
    
},

    img:{
borderWidth:4,
borderColor:"#E4BD30",
width:130,
height:130,
borderRadius:130,
},
btn:{
    backgroundColor:"#E4BD30",
    marginTop:'3%',
    marginBottom:'3%',
    width:'45%',
    height:35,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,

},
btntxt:{
    fontSize:20,
    color:"white",
    fontWeight:"bold",

},

 })