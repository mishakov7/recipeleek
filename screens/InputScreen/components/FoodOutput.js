import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableHighlight} from 'react-native';
class FoodOutput extends Component {

    render() {
        console.log(this.props.useList);
        return (
            <View>
                {this.props.useList.map((ingredient, i) => 
                    <TouchableHighlight key={i} style={s.ingredients}>
                        <Text style={s.text}>{ingredient}</Text>
                    </TouchableHighlight>
                )}
            </View>
        );
    }
}

const s = StyleSheet.create({
  ingredients: {
      padding: 5,
      backgroundColor: "#00BF3C",
      borderRadius: 50,
  },
  text: {
      color: "#fff",
      fontFamily: 'Avenir',
      fontSize: 16,
    }
});

export default FoodOutput;