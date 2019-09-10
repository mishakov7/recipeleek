import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const s = StyleSheet.create({
    container: {
        margin: 20,
    },
    container1: {
        padding: 10,
        backgroundColor: 'rgba(0,190,60,0.8)',
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
    },
    container2: {
        padding: 10,
        backgroundColor: 'rgba(0,25,65,0.8)',
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
    },
    number: {
        fontSize: 36,
        color: '#fff',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Avenir',
    }
});

const Steps = () => (
    <View style={s.container}>

        <View style={s.container1}>
            <Text style={s.number}>1.</Text>
            <Text style={s.text}>
                You look at your fridge and you tell us what's in there.
            </Text>
        </View>

        <View style={s.container2}>
            <Text style={s.number}>2.</Text>
            <Text style={s.text}>
                We leek over a tasty recipe that includes one of those ingredients!
            </Text>
        </View>

    </View>
);

export default Steps;