import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Routes from "./_core/routes/Routes";

// Firebase
import firebaseConf from "./environments/environments";
import * as firebase from "firebase/app";
firebase.initializeApp(firebaseConf);

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
