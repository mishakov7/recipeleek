import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, Button} from 'react-native';

class ResetButton extends Component {

    constructor(props) {
        super(props);
        this.eraseData = this.eraseData.bind(this);
    }

    eraseData = () => {
        this.props.changeList([]);
    }

    render() {
        return (
            <View>
                <Button
                    title="Reset"
                    onPress={this.eraseData}
                />
            </View>
        )
    }

}

const s = StyleSheet.create({
    ingredients: {
        fontFamily: 'Avenir',
        fontSize: 16,
        color: '#fff',
        padding: 5,
        backgroundColor: "#00BF3C",
        marginBottom: 10,
    },
});

export default ResetButton;