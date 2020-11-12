import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HabitatListItem = ({ habitat }) => {
    return (
        <View style={styles.item} onClick={() => console.log("Press " + habitat.name)}>
          <Text style={styles.title}>{ habitat.name }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default HabitatListItem;