import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const s = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Avenir',
    },
    b_container: {
        margin: 20,
        backgroundColor: '#1B3C70',
        padding: 20,
        borderRadius: 8,
        width: 200,
    },
    button: {
        fontFamily: 'Avenir',
        textTransform: 'uppercase',
        color: '#fff',
    },
});

const LeekButton = () => (
    <View style={s.container}>
        <Text style={s.text}>Are you ready?</Text>
        <View style={s.b_container}>
            <Button title="Leek it!">
                <Text style={s.b_text}>Leek it!</Text>
            </Button>
        </View>
    </View>
);

export default LeekButton;