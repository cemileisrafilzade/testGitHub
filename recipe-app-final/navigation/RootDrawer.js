import React from 'react';
import {createDrawerNavigator,DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {NavigationContainer}from '@react-navigation/native';

import {  HomeScreen,LoginPage,Settings, SignInPage, MainPage } from '../screens';
import { CustomDrawer } from '../components';


const {Navigator,Screen} =  createDrawerNavigator();
export const RootDrawer = () =>{
    return(
        <NavigationContainer>
            <Navigator
             drawerContent={(props) =>
                <CustomDrawer {...props} />
             }
             > 
        <Screen  name={'HOMEPAGE'} component={HomeScreen}/>
             <Screen name={'LOGINPAGE'} component={LoginPage} />
             <Screen name={'SIGNINPAGE'} component={SignInPage}/>
             <Screen name={'SETTINGS'} component={Settings}/>
            <Screen name={'MAINPAGE'} component={MainPage}/>

               
            </Navigator>
        </NavigationContainer>
    )
}