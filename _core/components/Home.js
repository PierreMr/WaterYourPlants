import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function Home({ navigation }) {
  console.log(navigation)
  const navNambersGame = () => {
    navigation.navigate('NumbersGame')
  }

  return (
    <View style={styles.container}>
      <Button title="Nouvelle partie" onPress={() => navNambersGame()}></Button>
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
