import React from 'react';
import {StyleSheet,Text,TouchableOpacity,Image,View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import UserImg from'../assets/userimg.png'
import Recipes from'../assets/recipes.png'
import Favourite from'../assets/favourite.png'
import Settings from'../assets/settings.png'
import Wishlist from'../assets/list.png'
import Logout from'../assets/logout.png'
export const CustomDrawer = ({navigation,LogOut,username,userImg})=>{
    return (
        <View style={styles.container}> 
         
         <View style={styles.upperpart}>
         <Text style={styles.drawertxt}>cook Easy</Text>

         <Image style={styles.userimg} source={UserImg}/>
        <Text style={styles.username}>Username</Text>
         </View>

         <View style={styles.lists}>

         <TouchableOpacity  
           onPress={() => navigation.navigate('')}
         style={[styles.drawerlist,styles.addlistbtn] }>
           <Image source={Recipes}/>
         <Text style={styles.listtext}>my recipes</Text>
         </TouchableOpacity >

         <TouchableOpacity 
           onPress={() => navigation.navigate('')}
           style={styles.drawerlist}>
                        <Image source={Wishlist}/>
         <Text style={styles.listtext}>wishlist</Text>
         </TouchableOpacity>

         <TouchableOpacity 
           onPress={() => navigation.navigate('')} 
          style={styles.drawerlist}>
                       <Image source={Favourite}/>

         <Text style={styles.listtext}>favorites</Text>
         </TouchableOpacity>

         <TouchableOpacity 
           onPress={() => navigation.navigate('SETTINGS')}
         style={styles.drawerlist}>
                      <Image source={Settings}/>
         <Text style={styles.listtext}>settings</Text>
         </TouchableOpacity>

         <TouchableOpacity 
           onPress={() => navigation.navigate('HOMEPAGE')}
         style={styles.logoutbtn}>
                     
         <Text style={styles.listtext}>LOG OUT</Text> 
         <Image source={Logout}/>
         </TouchableOpacity>
         </View>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
},
upperpart:{
backgroundColor:'#DDA0DD',
borderBottomLeftRadius:40,
borderBottomRightRadius:40,
alignItems:'center',
paddingVertical:30,
marginBottom:'15%'
},

drawertxt:{
  fontSize:36,
color:'white',
fontWeight:'bold',
},
userimg:{
  width:90,
  height:90,
  marginVertical:20,
  borderWidth:3,
  borderColor:'white',
  borderRadius:50,


},
username:{
  color:'white',
  fontSize:25
},
drawerlist:{
  marginBottom:16,
  height:44,
  backgroundColor:'#DDA0DD',
  alignItems:'center',
  justifyContent:'center',
  marginHorizontal:20,
  borderRadius:15,
flexDirection:'row',
justifyContent:'space-around'
},
listtext:{
  color:'white',
  fontSize:20,


},
logoutbtn:{
  backgroundColor:"#C90808",
  flexDirection:"row",
  marginHorizontal:20,
  height:44,
justifyContent:"center",
alignItems:"center",
borderRadius:20,
justifyContent:'space-around',
// marginTop:50
marginTop:'15%'
}

})