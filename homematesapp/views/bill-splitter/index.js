import * as React from "react";
import { Layout, Text, Button } from "react-native-ui-kitten";
import pageStyles from "../../assets/page-styles";

const BillSplitterView = () => (
  <Layout style={pageStyles.container}>
    <Text style={pageStyles.text} category="h4">
      Bill Splitter Page
    </Text>
    <Button>BUTTON</Button>
  </Layout>
);

export default BillSplitterView;
