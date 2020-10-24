import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../../_business/home/components/Home";
import Login from "../auth/components/Login";

const Stack = createStackNavigator();

export default function Navigation() {
    // Routes
    const routes = [
        {
            name: "Home",
            component: Home
        },
        {
            name: "Login",
            component: Login
        },
    ];

    // Private Routes
    const privateRoutes = [
    ];

    return (
        <Stack.Navigator>
            {routes.map(route => <Stack.Screen key={route.name} name={route.name} component={route.component} />)}
            {privateRoutes.map(privateRoute => {
                if (true) {
                    return <Stack.Screen key={privateRoute.name} name={privateRoute.name} component={privateRoute.component} />
                } else {
                    return <Stack.Screen key={'Login'} name={'Login'} component={Login} />
                }
            })}
        </Stack.Navigator>
    );
}
