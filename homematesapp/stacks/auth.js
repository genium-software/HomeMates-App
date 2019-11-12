import React, { Component } from "react";

import SignUpView from "../views/auth/SignUp";
import LoginView from "../views/auth/Login";
export class SignUp extends Component {
  static navigationOptions = { title: "Sign Up" };
  render() {
    return <SignUpView navigation={this.props.navigation} />;
  }
}

export class Login extends Component {
  static navigationOptions = { title: "Log In" };
  render() {
    return <LoginView navigation={this.props.navigation} />;
  }
}
