//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar, Linking,Platform, Text, FlatList, TouchableOpacity, View } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS, FONTFAMILY } from '../../module';
import GoBackHeader from '../../component/header/goBackHeader';
import { translate } from "react-i18next";

class FortniteTweetScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={Platform.OS === 'android' ? "light-content" : "light-content"}
          backgroundColor={Platform.OS === 'android' ? "#000" : "#6a51ae"}
        />
        <GoBackHeader
          titile={'FNBR NEWS'}
          nav={this.props.navigation}
        />
        {/* <ChangeLanguageComponent
         nav = {this.props.navigation}
        /> */}
       
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

//make this component available to the app
export default translate("common")(FortniteTweetScreen);
