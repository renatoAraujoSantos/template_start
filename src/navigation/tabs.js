import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, TelaBox, TelaFavorite, TelaSearch } from "../screens/index";
import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;
                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.flash}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "TelaBox":
                            return (
                                <Image
                                    source={icons.cube}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "TelaSearch":
                            return (
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                        case "TelaFavorite":
                            return (
                                <Image
                                    source={icons.heart}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="TelaBox"
                component={TelaBox}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="TelaSearch"
                component={TelaSearch}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="TelaFavorite"
                component={TelaFavorite}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
