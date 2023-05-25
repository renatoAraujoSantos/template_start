import React, { useState, useEffect } from 'react';
import { View, StatusBar, useColorScheme, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CardStyleInterpolators } from '@react-navigation/stack';
import {
    NavigationContainer, useNavigationContainerRef,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { ThemeContext } from './context/ContextTheme';
import { COLORS } from './constants';
import RootHome from './routes/RootHome';

const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
}
const Stack = createSharedElementStackNavigator();

export default function Inicio() {

    const navigationRef = useNavigationContainerRef();
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isLoadCompleto, setIsLoadCompleto] = useState(false);

    useEffect(() => {
        async function loadScreen() {
            try {
                const theme = await AsyncStorage.getItem('theme');
                if (theme != null) {
                    setIsDarkTheme(theme == 'true' ? true : false);
                }else{
                    await AsyncStorage.setItem('theme', 'true');
                }
                setIsLoadCompleto(true);
            } catch (error) {
                console.log('Erro na classe App metodo useEffect', error.message);
            }
        }
        loadScreen();
    }, []);

    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            accent: COLORS.gray5,
            backdrop: COLORS.primary,
            background: COLORS.white,
            onSurface: COLORS.white3,
            surface: COLORS.white5,
            text: COLORS.gray5,
        }
    }
    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            accent: COLORS.white3,
            backdrop: COLORS.black,
            background: COLORS.black,
            onSurface: COLORS.gray3,
            surface: COLORS.gray5,
            text: COLORS.white4,
        }
    }
    const themeContext = React.useMemo(() => ({
        toggleTheme: () => {
            setIsDarkTheme(isDarkTheme => !isDarkTheme);
        },
    }), []);

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? COLORS.black : COLORS.white,
    };

    if (!isLoadCompleto) {
        return (
            <View />
        );
    }

    return (
        <PaperProvider theme={isDarkTheme ? CustomDarkTheme : CustomDefaultTheme}>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar barStyle={'light-content'} translucent={true} backgroundColor='transparent' />
                <ThemeContext.Provider value={themeContext}>
                    <NavigationContainer ref={navigationRef}>
                        <Stack.Navigator initialRouteName="RootHome" screenOptions={options} >
                        <Stack.Screen name="RootHome" component={RootHome} options={{ title: '', headerShown: false }} />
                    </Stack.Navigator>
                    </NavigationContainer>
                </ThemeContext.Provider>
            </SafeAreaView>
        </PaperProvider>
    );
}
