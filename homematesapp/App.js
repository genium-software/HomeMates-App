import React from "react";
import * as firebase from "firebase";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// // import the different screens
import Loading from "./views/Loading";
import SignUp from "./views/auth/SignUp";
import Login from "./views/auth/Login";
import Dashboard from "./views/dashboard/index";

// Initialize Firebase
// TODO : move it to the config.json
const firebaseConfig = {
  apiKey: "AIzaSyBLeNW7z6_c2bC8fESRbi_-szUd2f0LYTk",
  authDomain: "homemates.firebaseapp.com",
  databaseURL: "https://homemates.firebaseio.com",
  projectId: "homemates",
  storageBucket: "homemates.appspot.com",
  messagingSenderId: "339152637924",
  appId: "1:339152637924:web:b575558491b9f12f6641f1"
};
firebase.initializeApp(firebaseConfig);

// create our app's navigation stack
const AppNavigator = createStackNavigator(
  {
    Loading,
    SignUp,
    Login,
    Dashboard
  },
  {
    initialRouteName: "Dashboard"
  }
);
const AppContainer = createAppContainer(AppNavigator);

// create our app's navigation stack
const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <AppContainer />
  </ApplicationProvider>
);
export default App;
