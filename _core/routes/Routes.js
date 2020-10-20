import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./../../_core/components/Home";
import NumbersGame from "./../../_business/NumbersGame/components/NumbersGame";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="NumbersGame"
        component={NumbersGame}
      />
    </Stack.Navigator>
  );
}
