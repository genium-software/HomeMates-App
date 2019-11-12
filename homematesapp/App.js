//
// Copyright Genium Software 2019
//

import React from "react";
import * as firebase from "firebase";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";

//Stacks
import { Login, SignUp } from "./stacks/auth";
import {
  HouseSettings,
  BillSplitter,
  Dashboard,
  TenantManagement,
  History
} from "./stacks/bottom-menu-stacks";
import { UserSettings } from "./stacks/user-settings";
import LoadingView from "./views/Loading";

import screens from "./views/screens";

// Initialize Firebase, TODO : move it to the config.json
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

//
// APPs STACKING in REACT NAVIGATION
//
const RootStack = createStackNavigator(
  {
    LoadingView,
    [screens.SIGNUP_VIEW]: SignUp,
    [screens.LOGIN_VIEW]: Login,
    [screens.DASHBOARD_VIEW]: Dashboard
  },
  {
    initialRouteName: screens.DASHBOARD_VIEW
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

const bottomTabNavigator = createBottomTabNavigator(
  {
    [screens.HOUSE_SETTINGS_VIEW]: HouseSettings,
    [screens.BILL_SPLITTER_VIEW]: BillSplitter,
    [screens.DASHBOARD_VIEW]: Dashboard,
    [screens.TENANT_MANAGEMENT_VIEW]: TenantManagement,
    [screens.HISTORY_VIEW]: History
  },
  {
    initialRouteName: screens.DASHBOARD_VIEW
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
  },
  Dashboard: bottomTabNavigator
});

const AppContainer = createAppContainer(RootDrawer);

// create our app's navigation stack
const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <AppContainer />
  </ApplicationProvider>
);
export default App;
