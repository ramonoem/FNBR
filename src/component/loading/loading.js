//import liraries
import React, { Component } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { DIMENSION, COLORS, APPEARANCES } from '../../module';
import isIphoneX from '../../module/platform';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { translate } from "react-i18next";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

class Loading extends Component {
    _onClick = () => {
        const { nav } = this.props
        nav.openDrawer()
    }
    render() {
        return (
            <View style={{ 
                position:'absolute',
                justifyContent:"center",
                alignItems:"center", 
                width:deviceWidth,
                height: deviceHeight,
                padding:16,
                // backgroundColor:"rgba(255,255,255,.5)",
                zIndex:1000 }}>
                 <ActivityIndicator size="large" color="#582D79" />
			</View>
        );
    }
}
export default translate("common")(Loading);

