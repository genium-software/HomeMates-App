import React, { Fragment } from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";
import { HomeScreen } from "./components/HomeScreen";

const DashboardView = props => {
  return (
    <Fragment>
      <HomeScreen />
    </Fragment>
  );
};

export default DashboardView;
