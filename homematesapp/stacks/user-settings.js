import React, { Component } from "react";

import Titlebar from "../utils/titlebar";
import HeaderButtonMenu from "../utils/header-button-menu";
import UserSettingsView from "../views/user-settings/index";

export class UserSettings extends Component {
  static navigationOptions = ({ navigation }) => {
    const options = Titlebar("User Settings");
    options.headerLeft = <HeaderButtonMenu navigation={navigation} />;
    return options;
  };
  render() {
    return <UserSettingsView navigation={this.props.navigation} />;
  }
}
