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
    text: {
        fontFamily: 'Avenir',
    },
    s_container: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
    },
    number: {
        fontSize: 36,
        color: '#001941',
        paddingRight: 5,
    },
    s_text: {
        fontSize: 14,
        color: '#001941',
        fontFamily: 'Avenir',
    }
});

const Overview = () => (
    <View style={{backgroundColor: '#33D165',}}>
        <View style={s.container}>

            <Text style={s.title}>How does this work?</Text>

            <View style={s.s_container}>
                <Text style={s.number}>1.</Text>
                <Text style={s.s_text}>
                    You look at your fridge and you tell us what's in there.
                </Text>
            </View>

            <View style={s.s_container}>
                <Text style={s.number}>2.</Text>
                <Text style={s.s_text}>
                    We leek over ONE tasty recipe that includes one of those ingredients!
                </Text>
            </View>

        </View>
    </View>
);

export default Overview;