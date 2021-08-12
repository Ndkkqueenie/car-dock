import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens";
import { TabIcon } from "../components";
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: "transparent",
                    height: 100
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused=
                    {focused} icon={icons.home} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused=
                    {focused} icon={icons.search} />
                }}
            />
            <Tab.Screen
                name="Car"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused=
                    {focused} icon={icons.car} />
                }}
            />
            <Tab.Screen
                name="Receipt"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused=
                    {focused} icon={icons.receipt} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;