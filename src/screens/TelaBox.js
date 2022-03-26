import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../constants';

export default function TelaBox(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
            <Text style={{ fontSize: 18, color: COLORS.black }}>Box</Text>
        </View>
    )
}