import React from "react"
import { StyleSheet, View } from "react-native";
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default function Login({ navigation }) {
  // Configure FirebaseUI.
  const uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      // signInSuccessUrl: '/',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
      }
  };

  return (
    <View style={styles.container}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
