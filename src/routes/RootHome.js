import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import { COLORS } from '../constants';

const StackApp = createStackNavigator();

const RootHome = ({ navigation }) => {
    return (
        <StackApp.Navigator initialRouteName='Home'
            screenOptions={{
                safeAreaInsets: { top: 0, bottom: 0 },
                headerStyle: {
                    backgroundColor: COLORS.white,
                    shadowColor: COLORS.white, // iOS
                    elevation: 0, // Android
                },
                headerTintColor: COLORS.white,
            }}>
            <StackApp.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: null,
                    headerTransparent: true,
                    headerLeft: null,
                    headerShown: null,
                }}
            />
        </StackApp.Navigator>
    );
};

export default RootHome;