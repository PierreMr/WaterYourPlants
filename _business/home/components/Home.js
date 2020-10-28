import React from "react";
import { StyleSheet, View, Button } from "react-native";
import * as firebase from "firebase/app";

export default function Home({ navigation }) {
  const navLogin = () => { navigation.navigate('Login'); }

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => navLogin()}></Button>
      <Button title="Déconnexion" onPress={() => firebase.auth().signOut()}></Button>
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
