import React, { Component } from "react";

import Titlebar from "../utils/titlebar";
import HeaderButtonMenu from "../utils/header-button-menu";

// Views
import HouseSettingsView from "../views/house-settings/index";
import BillSplitterView from "../views/bill-splitter/index";
import DashboardView from "../views/dashboard/index";
import TenantManagementView from "../views/tenant-management/index";
import HistoryView from "../views/history/index";

export class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    const options = Titlebar("Dashboard");
    options.headerLeft = <HeaderButtonMenu navigation={navigation} />;
    return options;
  };
  render() {
    return <DashboardView navigation={this.props.navigation} />;
  }
}

export class HouseSettings extends Component {
  static navigationOptions = { title: "Settings" };
  render() {
    return <HouseSettingsView navigation={this.props.navigation} />;
  }
}

export class BillSplitter extends Component {
  static navigationOptions = { title: "Bill Splitter" };
  render() {
    return <BillSplitterView navigation={this.props.navigation} />;
  }
}
export class TenantManagement extends Component {
  static navigationOptions = { title: "Management" };
  render() {
    return <TenantManagementView navigation={this.props.navigation} />;
  }
}
export class History extends Component {
  static navigationOptions = { title: "History" };
  render() {
    return <HistoryView navigation={this.props.navigation} />;
  }
}
