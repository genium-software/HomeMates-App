//
// Copyright Genium Software 2019
//

import React from "react";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider, Text, Button } from "react-native-ui-kitten";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import db from "./firebase";

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

const firestoreDB = db; // call db;

const AuthStack = createStackNavigator(
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

// Bottom Tab Navigator
const bottomTabNavigator = createBottomTabNavigator(
  {
    [screens.HOUSE_SETTINGS_VIEW]: {
      screen: HouseSettings,
      navigationOptions: {
        tabBarIcon: () => <Icon name="settings" size={20} color="black" />
      }
    },
    [screens.BILL_SPLITTER_VIEW]: {
      screen: BillSplitter,
      navigationOptions: {
        tabBarIcon: () => <Icon name="credit-card" size={20} color="black" />
      }
    },
    [screens.DASHBOARD_VIEW]: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: () => <Icon name="home" size={20} color="black" />
      }
    },
    [screens.TENANT_MANAGEMENT_VIEW]: {
      screen: TenantManagement,
      navigationOptions: {
        tabBarIcon: () => <Icon name="people" size={20} color="black" />
      }
    },
    [screens.HISTORY_VIEW]: {
      screen: History,
      navigationOptions: {
        tabBarIcon: () => <Icon name="timer" size={20} color="black" />
      }
    }
  },
  {
    initialRouteName: screens.DASHBOARD_VIEW
  }
);

// TODO: Set Header Title for each view (either use view title or Homemates logo) & link User Settings view to header button
// TODO: Fix header title style not connecting to the header title
const RootStack = createStackNavigator(
  {
    [screens.DASHBOARD_VIEW]: bottomTabNavigator,
    [screens.HOUSE_SETTINGS_VIEW]: HouseSettings,
    [screens.BILL_SPLITTER_VIEW]: BillSplitter,
    [screens.TENANT_MANAGEMENT_VIEW]: TenantManagement,
    [screens.HISTORY_VIEW]: History,
    [screens.USER_SETTINGS_VIEW]: SettingStack
  },
  {
    initialRouteName: screens.DASHBOARD_VIEW,
    defaultNavigationOptions: {
      headerTitle: () => <Text>HomeMates</Text>,
      headerRight: () => <Icon name="more-vert" size={30} color="white" />,
      headerStyle: {
        backgroundColor: "#212121"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "400",
        textAlign: "center",
        color: "white"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

// create our app's navigation stack
const App = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <AppContainer />
  </ApplicationProvider>
);
export default App;
