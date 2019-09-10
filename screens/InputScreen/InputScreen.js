import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

//  Components
import ScreenTitle from './components/ScreenTitle';
import FoodInput from './components/FoodInput';
import FoodOutput from './components/FoodOutput';
import ResetButton from './components/ResetButton';
import SubmitButton from './components/SubmitButton';

class InputScreen extends Component {
  constructor(props) {
    super(props);
    //  Initializes the state for the ingredients array
    this.state = {ingredientList: []};
  }

  listChange = (newList) => {
    this.setState({ingredientList: newList});
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <ScreenTitle/>
        <FoodInput initList={this.state.ingredientList} changeList={this.listChange}/>
        <FoodOutput useList={this.state.ingredientList}/>
        <ResetButton useList={this.state.ingredientList} changeList={this.listChange}/>
        <SubmitButton submitList={this.state.ingredientList}/>
      </ScrollView>
    );
  }
}
/*
export default function InputScreen() {
  constructor(props) {
    super(props);
    this.state = {p_ingredients: null};        
        /*

        if (this.state.text.includes(" ") === true ||
            letter.nativeEvent.key === " ") {
            this.textInput.clear();
        }

        /*if (letter.nativeEvent.key == " ") {
            
            ingredients.push(this.state.text);
            this.textInput.clear();
            this.setState({ text: '' });
        }*/

InputScreen.navigationOptions = {
  title: 'Get Recipe',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default InputScreen;