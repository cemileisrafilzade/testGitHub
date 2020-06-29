import React from 'react'
import {StyleSheet,
    Text,
    TextInput} from 'react-native'
    export const Textinput = (props) =>{
        return(
            <TextInput style={styles.textinput} 
            placeholder={props.title}
             placeholderTextColor={'black'}/>   
        )
    }

    const styles = StyleSheet.create({
        textinput:{
            width:'90%',
            backgroundColor:"#D9D9D9",
            marginBottom:24,
            height:60,
            borderRadius:15,
          fontSize:20,
          paddingHorizontal:15,
        },
    }) 