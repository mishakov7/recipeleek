import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyASAvOWzwnSZ_6km9-E_1PgX3hQdcNCdgk",
    authDomain: "recipeleek-230e4.firebaseapp.com",
    databaseURL: "https://recipeleek-230e4.firebaseio.com",
    projectId: "recipeleek-230e4",
    storageBucket: "recipeleek-230e4.appspot.com",
    messagingSenderId: "958206981408",
    appId: "1:958206981408:web:967ea462f2f03bfb"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
}

const firebase = require('firebase/app');
require('firebase/database');

export default { Firebase, firebase };