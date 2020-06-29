import React from 'react'
import {TextInput,StyleSheet,
    Text,Image,View,TouchableOpacity,Button
} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Drawer from '../assets/drawer.png'
import { BelowPart, Recipe } from '../components';
import CheeseBurger from '../assets/cheeseburger.png'
import Crembrule from '../assets/crembrule.png'
import Cooker from '../assets/cooker.png'

export const MainPage = ({navigation},props) => {
    return(
        <View style={styles.container} >
          <View style={styles.upperpart}>
              <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
              <TextInput style={styles.txtinput} />
             <TouchableOpacity 
            //  onPress={navigation.openDrawer()}///????????
             >
                  <Image source={Drawer} style={styles.drawerbtn}/>
               </TouchableOpacity></View>
              <Text style={styles.headertxt}>  RECIPES </Text>
          </View>
          <View style={{alignItems:'center'}}>
              <TouchableOpacity>
<Recipe cookerimg={Cooker} imgsrc = {CheeseBurger} title='Cheese Burger' />
</TouchableOpacity>
<TouchableOpacity>
<Recipe cookerimg={Cooker} imgsrc = {Crembrule} title='Creme Brule' />
</TouchableOpacity>
</View>
          <BelowPart/>
        </View>
    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    // height:'100%'
},
upperpart:{
    backgroundColor:'#E4BD30',
   alignItems:'center',
   justifyContent:'center',
   paddingTop:'10%',
   borderBottomLeftRadius:70,
   borderBottomRightRadius:70,
   
   
},
txtinput:{
    width:'75%',
    backgroundColor:'white',
    borderRadius:30,
    height:45,
    marginRight:30,


},
headertxt:{
    color:'white',
    fontSize:40,
    paddingBottom:15
}

})