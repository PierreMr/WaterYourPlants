import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import AuthService from "./../../../_core/auth/services/AuthService";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome !</Text>
      <Text>{ AuthService.user().displayName }</Text>
      <Button title="Habitats" onPress={() => navigation.navigate("Habitats") }></Button>
      <Button title="Déconnexion" onPress={() => AuthService.logout()}></Button>
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

export default Home;