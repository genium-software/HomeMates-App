import * as React from "react";
import { Layout, Text, Button } from "react-native-ui-kitten";
import { Spinner } from "react-native-ui-kitten";
import pageStyles from "../../../assets/page-styles";

const HomeScreen = ({ house }) => {
  return (
    <Layout style={pageStyles.container}>
      <Text style={pageStyles.text} category="h4">
        Welcome,
      </Text>
      {!!house ? (
        <Text style={pageStyles.text}>
          Address: {house.address.unit} / {house.address.streetNumber}{" "}
          {house.address.streetName}, {house.address.suburb},{" "}
          {house.address.postCode}, {house.address.country}
        </Text>
      ) : (
        <Spinner />
      )}

      <Button>BUTTON</Button>
    </Layout>
  );
};

export default HomeScreen;
