import React from 'react'
import {TouchableOpacity,
Text,
StyleSheet,

} from 'react-native'

export const RedBtn = (props) =>{
    return(
        <TouchableOpacity style={styles.btncontainer}>
            <Text style={styles.btntxt}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
btncontainer:{
    width:261,
    height:69,
    backgroundColor:"#C90808",
    alignItems:'center',
    justifyContent:"center",
    borderRadius:20,
    margin:20
},
btntxt:{
    color:'white',
    fontSize:25,
    fontWeight:"bold"
}
})