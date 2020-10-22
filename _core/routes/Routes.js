import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../components/Home";
import Login from "../auth/components/Login";
import NumbersGame from "./../../_business/NumbersGame/components/NumbersGame";

const Stack = createStackNavigator();

export default function Routes() {
  const routes = [
      {
          name: "Home",
          component: Home
      },
      {
          name: "Login",
          component: Login
      },
      {
          name: "NumbersGame",
          component: NumbersGame
      }
  ];

  return (
    <Stack.Navigator>
      {routes.map(route => <Stack.Screen key={route.name} name={route.name} component={route.component} />)}
    </Stack.Navigator>
  );
}
