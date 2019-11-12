import React, { Fragment } from "react";
import { Layout, Text, Button } from "react-native-ui-kitten";
import pageStyles from "../../assets/page-styles";

const HouseSettingsView = props => {
  return (
    <Fragment>
      <Layout style={pageStyles.container}>
        <Text style={pageStyles.text} category="h3">
          House Settings
        </Text>
        <Button>LOL</Button>
      </Layout>
    </Fragment>
  );
};

export default HouseSettingsView;
