import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function Home({ navigation }) {
  const navLogin = () => { navigation.navigate('Login'); }

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => navLogin()}></Button>
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
