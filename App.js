/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, { Component } from 'react';
import {  StyleSheet, AsyncStorage } from 'react-native';
import { Provider } from 'mobx-react';
import store from './src/store';
import { YellowBox } from 'react-native';
import AppStacking from './src/config/appRuote';
import i18n from "./src/i18n";
import { I18nextProvider } from "react-i18next";

AsyncStorage.getItem("@lang:code").then(value => {
	if (value) {
		i18n.changeLanguage(value);
	}
	else if (AsyncStorage.getItem("@lang:code") === null) {
		// this.props.navigation.navigate("ChangeLanguageScreen")
	}
});

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <I18nextProvider i18n={i18n}>
          <AppStacking  
         nav={this.props.nav}
          />
        </I18nextProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
