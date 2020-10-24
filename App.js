import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./_core/navigation/Navigation";

// Firebase
import firebaseConf from "./environments/environments";
import * as firebase from "firebase/app";
firebase.initializeApp(firebaseConf);

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./_core/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
