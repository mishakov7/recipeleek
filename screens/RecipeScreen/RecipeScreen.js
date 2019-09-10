import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

class RecipeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Kiss my ass</Text>
      </ScrollView>
    );
  }
}

RecipeScreen.navigationOptions = {
  title: 'Recipe',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default RecipeScreen;