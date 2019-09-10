import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, Button} from 'react-native';
import FoodOutput from './FoodOutput';
//import console = require('console');

class FoodInput extends Component {

    //  All prop-related
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            ingredient: '',
        }
        this.saveIngredient = this.saveIngredient.bind(this);
    }

    saveIngredient = () => {
        this.props.changeList(this.props.initList.concat(this.state.text));
        this.textInput.clear();       
    }

    render() {
        return (
            <View>
                <View>
                    <TextInput 
                    placeholder="Enter your ingredients..." 
                    style={s.input}
                    onChangeText={(text) => this.setState({text})}
                    ref={input => {this.textInput = input}}
                    />
                    <Button
                    title="O"
                    onPress={this.saveIngredient}
                    />
                </View>
            </View>
        )
    }

}

const s = StyleSheet.create({
    container: {
        backgroundColor: '#dfdfdf',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        fontFamily: 'Avenir',
        fontSize: 18,
        height: 20,
        margin: 20,
    },
    ingredients: {
        fontFamily: 'Avenir',
        fontSize: 16,
        color: '#fff',
        padding: 5,
        backgroundColor: "#00BF3C",
        marginBottom: 10,
    },
});

export default FoodInput;

/*



When rendering an array of React elements, a key on each element is needed for React to know how to update each element.

const list = ["Apple", "Banana", "Orange"]

class Component extends React.Component {
  render() {
    return list.map(item => {
      return (
        <div key={item}>{item}</div>
      )
    })
  }
}

*/