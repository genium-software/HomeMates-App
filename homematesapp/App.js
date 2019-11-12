import React, { Component } from "react";
import * as firebase from "firebase";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation-stack";
import screens from "./views/screens";
// // import the different screens
import LoadingView from "./views/Loading";
import SignUpView from "./views/auth/SignUp";
import LoginView from "./views/auth/Login";
import DashboardView from "./views/dashboard/index";

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

class SignUp extends Component {
  static navigationOptions = { title: "Sign Up" };
  render() {
    return <SignUpView navigation={this.props.navigation} />;
  }
}

class Login extends Component {
  static navigationOptions = { title: "Login" };
  render() {
    return <LoginView navigation={this.props.navigation} />;
  }
}

class Dashboard extends Component {
  static navigationOptions = { title: "Dashboard" };
  render() {
    return <DashboardView navigation={this.props.navigation} />;
  }
}

class MenuSetting extends Component {
  static navigationOptions = ({ navigation }) => {
    options.headerLeft = <HeaderButtonMenu navigation={navigation} />;
    return options;
  };
  render() {
    return <MenuView navigation={this.props.navigation} />;
  }
}

// create our app's navigation stack
const RootStack = createStackNavigator(
  {
    LoadingView,
    [screens.SIGNUP_VIEW]: SignUp,
    [screens.LOGIN_VIEW]: Login,
    [screens.DASHBOARD_VIEW]: Dashboard
  },
  {
    initialRouteName: "Dashboard"
  }
);

const SettingStack = createStackNavigator(
  {
    [screens.USER_SETTINGS_VIEW]: UserSettings
  },
  {
    initialRouteName: screens.USER_SETTINGS_VIEW,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#212121"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "400",
        textAlign: "center"
      }
    }
  }
);

const RootDrawer = createDrawerNavigator({
  Home: {
    screen: RootStack,
    navigationOptions: {
      drawerLabel: "Home",
      drawerIcon: () => <Icon name="home" size={20} color="black" />
    }
  },
  Menu: {
    screen: SettingStack,
    navigationOptions: {
      drawerLabel: "Settings",
      drawerIcon: () => <Icon name="settings" size={20} color="black" />
    }
  }
});

const AppContainer = createAppContainer(RootDrawer);

// create our app's navigation stack
const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <AppContainer />
  </ApplicationProvider>
);
export default App;
