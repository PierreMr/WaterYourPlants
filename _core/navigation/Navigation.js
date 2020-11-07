import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import AuthService from "./../auth/services/AuthService";

import Home from "../../_business/home/components/Home";
import Login from "../auth/components/Login";

const Stack = createStackNavigator();

export default function Navigation() {
    // Private Routes
    const privateRoutes = [
        {
            name: "Home",
            component: Home
        },
    ];

    // Routes
    const routes = [
    ];

    return (
        <Stack.Navigator>
            {AuthService.user() ? 
                <>{ privateRoutes.map(privateRoute => <Stack.Screen key={privateRoute.name} name={privateRoute.name} component={privateRoute.component} />) }</>
                : <Stack.Screen name={'Login'} component={Login} />
            }
            {routes.map(route => <Stack.Screen key={route.name} name={route.name} component={route.component} />)}
        </Stack.Navigator>
    );
}
