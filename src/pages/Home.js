import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Ionicons, Entypo, AntDesign, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ThemeContext } from '../context/ContextTheme';
import { COLORS } from '../constants';
import { VALORES_CONTA, VALORES_CONTA_EDITADO } from '../model/MockData';
import GraficoCircular from '../components/GraficoCircular';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {

    const { toggleTheme } = useContext(ThemeContext);
    const thColor = useTheme().colors;
    var intervalNumberCount = 0;

    const colorDefault = thColor.background == '#FFFFFF' ? COLORS.black : COLORS.white;
    const colorReverso = thColor.background == '#FFFFFF' ? COLORS.white2 : 'rgba(55,55,55,0.9)';
    const backgroundBanner = thColor.background == '#FFFFFF' ? COLORS.white : 'rgba(51,51,51,0.9)';
    const backgroundScreen = thColor.background == '#FFFFFF' ? COLORS.white2 : COLORS.black;

    const [isAlterarTheme, setIsAlterarTheme] = useState(false);
    const [listaValorConta, setListaValorConta] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            setListaValorConta(VALORES_CONTA);
            carregaLista();
            return () => {
                setListaValorConta([]);
                clearInterval(intervalNumberCount);
            };
        }, [])
    );

    const carregaLista = async () => {
        try {
            const theme = await AsyncStorage.getItem('theme');
            if (theme != null) {
                setIsAlterarTheme(theme == 'true' ? true : false);
            }
            const val = 0;
            setListaValorConta(VALORES_CONTA_EDITADO);

        } catch (error) {
            console.log('Error na classe Home metodo carregaLista ', error);
        }
    }

    const mudarThema = async () => {
        try {
            setIsAlterarTheme(!isAlterarTheme);
            toggleTheme();
            const th = !isAlterarTheme == true ? 'true' : 'false';
            await AsyncStorage.setItem('theme', `${th}`);
        } catch (error) {
            console.log('Erro na classe Bt1Home metodo mudarThema', error);
        }
    }


    function rederBanner() {
        return (
            <View style={{ flex: 1, marginTop: 10 }}>
                <View style={[styles.shadowBanner, { backgroundColor: backgroundBanner }]}>
                    <View style={{ height: 70, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 0.5, marginLeft: 10, backgroundColor: COLORS.transparent }}>
                            <Text style={{ fontSize: 23, color: thColor.text, fontFamily: 'Roboto_900Black' }}>{'Balance'}</Text>
                            <Text style={{ fontSize: 15, color: COLORS.gray2, fontWeight: 'bold' }}>{'Hoje, 21 Fev'}</Text>
                        </View>
                        <View style={{ flex: 0.2, backgroundColor: COLORS.transparent }}>
                        </View>
                        <View style={{ flex: 0.3, backgroundColor: COLORS.transparent }}>
                            <TouchableOpacity onPress={() => {  }}>
                                <View 
                                    style={{ 
                                        height: 33, 
                                        flexDirection: 'row', 
                                        justifyContent: 'flex-end', 
                                        alignItems: 'center', 
                                        borderWidth: 3, 
                                        borderRadius: 8, 
                                        marginHorizontal: 10, 
                                        borderColor: COLORS.gold3 
                                    }}>
                                    <View style={{ flex: 0.4, alignItems: 'flex-end' }}>
                                        <Feather name="plus" size={18} color={COLORS.gold3} />
                                    </View>
                                    <View style={{ flex: 0.6, alignItems: 'flex-start', marginLeft: 3 }}>
                                        <Text style={{ textAlign: 'center', fontSize: 18, color: COLORS.gold3, fontFamily: 'Roboto_900Black' }}>{'Add'}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '95%', justifyContent: 'center', marginLeft: 20, backgroundColor: COLORS.transparent }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                            <View style={{ justifyContent: 'flex-end', }}>
                                <Text style={{ fontSize: 22, color: COLORS.gray3, }}>{'$ '}</Text>
                            </View>
                            <View style={{ marginBottom: -5 }}>
                                <Text style={{ fontSize: 35, color: thColor.text, fontFamily: 'Roboto_900Black' }}>{'8219 '}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-start', }}>
                                <Text style={{ fontSize: 22, color: COLORS.gray3, }}>{'.96 '}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '95%', marginBottom: 10, justifyContent: 'center', marginLeft: 20, backgroundColor: COLORS.transparent }}>
                        <Text style={{ fontSize: 16, color: COLORS.gray3, fontFamily: 'Roboto_900Black' }}>{'-25% Comp Last Week'}</Text>
                    </View>
                </View>
            </View>
        )
    }



    function renderHeaderIcons() {
        return (
            <View 
                style={{ 
                    height: 60, 
                    marginTop: -40, 
                    backgroundColor: backgroundScreen, 
                    borderTopLeftRadius: 40, 
                    borderTopRightRadius: 40, 
                    paddingVertical: 10 
                }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 40, flexDirection: 'row', marginHorizontal: 10 }}>
                        <View style={{ flex: 0.2 }}>
                            <TouchableOpacity style={[styles.shadow, { backgroundColor: colorReverso, marginLeft: 10 }]} onPress={() => { }}>
                                <AntDesign name="left" size={24} color={colorDefault} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.6, alignItems: 'center', marginLeft: 0 }}>
                            <Text style={{ textAlign: 'center', fontSize: 23, color: thColor.text, marginBottom: 5, fontFamily: 'Roboto_900Black' }}>{'Account'}</Text>
                        </View>
                        <View style={{ flex: 0.2, marginRight: 2, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                            <TouchableOpacity style={[styles.shadow, { backgroundColor: colorReverso, marginLeft: 15 }]} onPress={() => { mudarThema() }}>
                                <Entypo name="light-up" size={24} color={colorDefault} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 23, color: thColor.text, fontWeight: 'bold', marginBottom: 5 }}>{''}</Text>
                    <View style={{ position: 'absolute', right: '19%', top: 1 }}>
                        <TouchableOpacity style={[styles.shadow, { backgroundColor: colorReverso, marginLeft: 15 }]} onPress={() => { }}>
                            <View style={{ position: 'absolute', right: '19%', top: 5 }}>
                                <Ionicons name="notifications-outline" size={24} color={colorDefault} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function rederAccounts() {
        return (
            <View style={{ height: 180, backgroundColor: COLORS.transparent }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20, marginVertical: 10 }}>
                    <View style={{ flex: 0.5, marginLeft: 10, }}>
                        <Text style={{ fontSize: 20, color: thColor.text, fontFamily: 'RobotoCondensed_700Bold' }}>{'Accounts'}</Text>
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <AntDesign name="arrowright" size={24} color={COLORS.gold3} />
                    </View>
                </View>
                <ScrollView horizontal>
                    {listaValorConta.map((item, index) => {
                        let corDesc = item.status ? thColor.text : COLORS.red2;
                        return (
                            <View key={index}>
                                <View style={[styles.shadowCartds, { backgroundColor: backgroundBanner }]}>
                                    <View style={{ height: 60, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                        <View style={{ flex: 0.5, marginLeft: 1, backgroundColor: COLORS.transparent }}>
                                            <View 
                                                style={{ 
                                                    height: 54, 
                                                    width: 54, 
                                                    borderRadius: 28, 
                                                    justifyContent: 'center', 
                                                    alignItems: 'center', 
                                                    backgroundColor: COLORS.transparent 
                                                }}>
                                                <CircularProgress
                                                    value={item.valorCircular}
                                                    radius={25}
                                                    inActiveStrokeOpacity={0.9}
                                                    activeStrokeWidth={25}
                                                    activeStrokeColor={COLORS.gold4} 
                                                    inActiveStrokeWidth={20}
                                                    inActiveStrokeColor={COLORS.gold1}
                                                    duration={800}
                                                    circleBackgroundColor={COLORS.white}
                                                    strokeLinecap={'butt'}
                                                />
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.2, backgroundColor: COLORS.transparent }}>
                                        </View>
                                        <View style={{ flex: 0.3 }}>
                                            <TouchableOpacity onPress={() => { }}>
                                                <View style={{ justifyContent: 'center', alignItems: 'flex-end', marginTop: 10, }}>
                                                    <Entypo name="dots-three-vertical" size={24} color={COLORS.gold3} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ width: '95%', justifyContent: 'center', marginLeft: 10, backgroundColor: COLORS.transparent }}>
                                        <Text>
                                            <Text style={{ fontSize: 15, color: corDesc, fontWeight: 'bold' }}>{'R$ '}</Text>
                                            <Text style={{ fontSize: 22, color: corDesc, fontFamily: 'Roboto_900Black' }}>{item.valor}</Text>
                                            <Text style={{ fontSize: 15, color: corDesc, fontWeight: 'bold' }}>{'.96 '}</Text>
                                        </Text>
                                    </View>
                                    <View style={{ width: '95%', marginTop: 1, justifyContent: 'center', marginLeft: 10, backgroundColor: COLORS.transparent }}>
                                        <Text style={{ fontSize: 15, color: COLORS.gray2, fontWeight: 'bold' }}>{item.desc}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        )
    }

    
    function rederGrafico() {
        return (
            <View style={{ flex: 1, marginVertical: 15 }}>
                <View style={[styles.shadowBanner, { backgroundColor: backgroundBanner }]}>
                    <View style={{ height: 70, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 0.5, marginLeft: 10, backgroundColor: COLORS.transparent }}>
                            <Text style={{ fontSize: 23, color: thColor.text, fontFamily: 'Roboto_900Black' }}>{'Expenses'}</Text>
                            <Text style={{ fontSize: 15, color: COLORS.gray2, fontWeight: 'bold' }}>{'This Week'}</Text>
                        </View>
                        <View style={{ flex: 0.1, backgroundColor: COLORS.transparent }}>
                        </View>
                        <View style={{ flex: 0.4, }}>
                            <TouchableOpacity onPress={() => { }}>
                                <View 
                                    style={{ 
                                        height: 33, 
                                        flexDirection: 'row', 
                                        justifyContent: 'flex-end', 
                                        alignItems: 'center', 
                                        borderWidth: 3, 
                                        borderRadius: 8, 
                                        marginHorizontal: 1, 
                                        borderColor: COLORS.gold3 
                                    }}>
                                    <View style={{ flex: 0.8, alignItems: 'flex-start', marginLeft: 5 }}>
                                        <Text style={{ textAlign: 'center', fontSize: 18, color: COLORS.gold3, fontFamily: 'Roboto_900Black' }}>{'Week'}</Text>
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'flex-end', marginRight: 5 }}>
                                        <Feather name="chevron-down" size={18} color={COLORS.gold3} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <GraficoCircular />
                </View>
            </View>
        )
    }

    function renderEnviarReceber() {
        return (
            <View style={{ flex: 1, marginVertical: 15, marginHorizontal: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.5, marginRight: 5 }}>
                        <View style={[styles.shadowEnviarReceber, { backgroundColor: backgroundBanner }]}>
                            <View style={{ marginVertical: 15 }}>
                                <View style={{ backgroundColor: COLORS.transparent }}>
                                    <Feather name="plus-circle" size={34} color={COLORS.gold3} />
                                </View>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 18, color: thColor.text, fontFamily: 'Roboto_900Black' }}>{'Receive'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.5, marginLeft: 5 }}>
                        <View style={[styles.shadowEnviarReceber, { backgroundColor: backgroundBanner }]}>
                            <View style={{ marginVertical: 15 }}>
                                <View style={{ backgroundColor: COLORS.transparent }}>
                                    <Feather name="minus-circle" size={34} color={COLORS.gold3} />
                                </View>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 18, color: thColor.text, fontFamily: 'Roboto_900Black' }}>{'Send'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: backgroundScreen }}>
            <View style={{ height: "11%", backgroundColor: thColor.backdrop }} />
            <View style={{ flex: 1 }}>
                {renderHeaderIcons()}
                <ScrollView>
                    {rederBanner()}
                    {rederAccounts()}
                    {rederGrafico()}
                    {renderEnviarReceber()}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundScreen }} >
                        <Text style={{ textAlign: 'center', fontSize: 23, color: thColor.text, fontWeight: 'bold', marginBottom: 5 }}>{' '}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    shadow: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    shadowBanner: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    shadowCartds: {
        width: 130,
        height: 130,
        marginHorizontal: 9,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    shadowEnviarReceber: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.9)',
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
});
