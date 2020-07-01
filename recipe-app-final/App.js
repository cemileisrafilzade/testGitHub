import React,{useState} from 'react';
import {RootDrawer} from './navigation/RootDrawer';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDNcvKSKvLpbQBTDvvVfI_DDOxsG7RbgC0",
  authDomain: "test-firebase-43c73.firebaseapp.com",
  databaseURL: "https://test-firebase-43c73.firebaseio.com",
  projectId: "test-firebase-43c73",
  storageBucket: "test-firebase-43c73.appspot.com",
  messagingSenderId: "302301932073",
  appId: "1:302301932073:web:81c0aad8042524014e4a38",
  measurementId: "G-0PPRZWSWKW"
};

export default function App() {
  

  return   <RootDrawer/>
}

