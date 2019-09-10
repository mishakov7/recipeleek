import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const s = StyleSheet.create({
    container: {
        margin: 20,
    },
    title: {
        fontSize: 28,
        textTransform: 'uppercase',
        fontFamily: 'Avenir Bold',
    },
});

const ScreenTitle = () => (
    <View style={s.container}>
        <Text style={s.title}>What's in your kitchen?</Text>
    </View>
)

export default ScreenTitle;