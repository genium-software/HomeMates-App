import React, { Fragment } from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { HomeScreen } from "./components/HomeScreen";

export default class Dashboard extends React.Component {
  render() {
    return (
      <Fragment>
        <HomeScreen />
      </Fragment>
    );
  }
}
