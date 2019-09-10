import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const s = StyleSheet.create({
    container: {
        margin: 20,
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        textTransform: 'uppercase',
        fontFamily: 'Avenir Bold',
        margin: 20,
    },
    text: {
        fontFamily: 'Avenir',
        fontSize: 16,
        color: '#001941',
        textAlign: 'center',
        marginVertical: 40,
        marginHorizontal: 20,
    },
});

const Front = () => (
    <View style={s.container}>

        <Text style={s.title}>Recipe Leek</Text>
        <Image source={require('./leeklogo.png')}/>
        <Text style={s.text}>
            Are you currently thinking about going to McDonalds? Don't. You and I both know you have SOMETHING in your kitchen. Consider cooking from your own home! It's hard coming up with unique recipes out of the things you never touch in your own kitchen. That's what we're here for.
        </Text>

    </View>
);

export default Front;