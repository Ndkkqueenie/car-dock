import React from 'react';
import { LandingScreen, CarDetail } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'LandingScreen'}
            >
                <Stack.Screen
                    name="LandingScreen"
                    component={LandingScreen}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={Tabs}
                />
                <Stack.Screen
                    name="CarDetail"
                    component={CarDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;