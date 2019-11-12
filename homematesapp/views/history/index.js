import * as React from "react";
import { Layout, Text, Button } from "react-native-ui-kitten";
import pageStyles from "../../assets/page-styles";

const HistoryView = () => (
  <Layout style={pageStyles.container}>
    <Text style={pageStyles.text} category="h4">
      History Page
    </Text>
    <Button>BUTTON</Button>
  </Layout>
);

export default HistoryView;
