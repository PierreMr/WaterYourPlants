import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./_core/navigation/Navigation";

// Firebase
import firebaseConf from "./environments/environments";
import * as firebase from "firebase/app";
firebase.initializeApp(firebaseConf);
firebase.auth().languageCode = 'fr';

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./_core/reducers";

import UseUser from "./_core/auth/hooks/UseUser";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [user, initializing] = UseUser();

  if (initializing) return null;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
