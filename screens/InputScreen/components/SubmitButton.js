import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, Button} from 'react-native';

const firebase = require('firebase/app');
require('firebase/database');

class SubmitButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        }
        this.queryRecipes = this.queryRecipes.bind(this);
    }

    queryRecipes = () => {

        const config = {
            apiKey: "AIzaSyASAvOWzwnSZ_6km9-E_1PgX3hQdcNCdgk",
            authDomain: "recipeleek-230e4.firebaseapp.com",
            databaseURL: "https://recipeleek-230e4.firebaseio.com",
            projectId: "recipeleek-230e4",
            storageBucket: "recipeleek-230e4.appspot.com",
            messagingSenderId: "958206981408",
            appId: "1:958206981408:web:967ea462f2f03bfb"
        };

        firebase.initializeApp(config);

        firebase.database().ref("recipes").orderByChild("ingredients/").equalTo("cabbage").on("value", 
            snapshot => {
                const recipesObject = snapshot.val();
                console.log("_______________" + snapshot.key + " " + snapshot.val());
                //this.setState({ recipes: recipesList });
            })
    
    }

    render() {

        return (
            <View>
                <Button
                    onPress={this.queryRecipes}
                    title="Submit"
                />
                <Text>{this.state.recipes}</Text>
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

//const SubmitButton = withFirebase(SubmitButtonBase);

/*export default compose(
    withFirebase
)(SubmitButton);*/
export default SubmitButton;