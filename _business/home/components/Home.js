import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import * as firebase from "firebase/app";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome !</Text>
      <Text>{ firebase.auth().currentUser.displayName }</Text>
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
