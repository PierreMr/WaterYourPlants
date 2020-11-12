import React, { useState } from "react";
import { StyleSheet, Modal, View, Text, TouchableHighlight, TextInput } from "react-native";
import HabitatService from "./../../services/HabitatService";

const AddHabitatModal = ({ addHabitatModalVisible, setAddHabitatModalVisible }) => {
    const [habitatTitleInput, sethabitatTitleInput] = useState("");

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={addHabitatModalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: .5 }}
                    onChangeText={text => sethabitatTitleInput(text)}
                    value={habitatTitleInput}
                    placeholder="Maison"
                />


                <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                        setAddHabitatModalVisible(false);
                    }}
                >
                    <Text style={styles.textStyle}>Annuler</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                    onPress={() => {
                        HabitatService.post({ name: habitatTitleInput })
                        setAddHabitatModalVisible(false);
                    }}
                >
                    <Text style={styles.textStyle}>Ajouter</Text>
                </TouchableHighlight>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
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
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});

export default AddHabitatModal;