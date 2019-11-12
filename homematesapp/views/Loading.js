import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingView = () => {
  // componentDidMount() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.props.navigation.navigate(user ? "Dashboard" : "SignUp");
  //   });
  // }
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default LoadingView;
