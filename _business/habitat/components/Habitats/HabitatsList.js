import React, { useState } from "react";
import { StyleSheet, View, ActivityIndicator, TouchableHighlight, Text } from "react-native";
import UseHabitats from "../../hooks/UseHabitats";
import AddHabitatModal from "./AddHabitatModal";
import HabitatListItem from "./HabitatListItem";

const HabitatsList = () => {
  const [habitats, loading] = UseHabitats();
  const [addHabitatModalVisible, setAddHabitatModalVisible] = useState(false);

  return (
    <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {habitats && 
            <View style={styles.container}>
                {habitats.length === 0
                    ? <Text>Vous n'avez pas ajouter d'habitat.</Text>
                    : <>{ habitats.map(habitat => <HabitatListItem key={habitat.id} habitat={habitat} />) }</>
                }
                <AddHabitatModal addHabitatModalVisible={addHabitatModalVisible} setAddHabitatModalVisible={setAddHabitatModalVisible} />
                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        setAddHabitatModalVisible(true);
                    }}
                    >
                    <Text style={styles.textStyle}>Ajouter un habitat</Text>
                </TouchableHighlight>
            </View>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default HabitatsList;