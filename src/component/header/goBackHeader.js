//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import { DIMENSION, COLORS, APPEARANCES , FONTFAMILY} from '../../module';
import isIphoneX from '../../module/platform';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { DrawerActions } from 'react-navigation-drawer';

class GoBackHeader extends Component {
    _onClick = () => {
        console.log("nav", this.props)
        const { nav } = this.props
        // nav.openDrawer()
        // this.props.nav.dispatch(DrawerActions.openDrawer());
        this.props.nav.goBack()
    }
    render() {
        const { nav } = this.props
        return (
            <View style={styles.headerContainer}>
                <SafeAreaView style={styles.header}>
                    <View style={styles.rowHeader}>
                        <TouchableOpacity
                            onPress={this._onClick}
                            style={{marginLeft: DIMENSION(2),
                            marginRight: DIMENSION(5)
                            }}
                        >
                            <AntDesign style={styles.icon}
                                name="arrowleft" 
                                // name = {this.props.icon}
                                />
                        </TouchableOpacity>
                        <Text style={[styles.headerTittle, {
                        // fontSize: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontSize : FONTFAMILY.subfontSizeEn, 
                        // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn  
                        }]}>{this.props.titile}</Text>
                        <MaterialIcons style={styles.icon} name={this.props.exicon} />
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    headerTittle: {
        color: COLORS.SUB_HEADER_TITTLE,
        fontSize: FONTFAMILY.mainFontSize,
        fontWeight: 'bold',
        // backgroundColor: "red",
    },
    rowHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingRight: DIMENSION(10),
        paddingLeft: DIMENSION(1),
    },
    icon: {
        fontSize: 30,
        color: "#FFF"
    },
    imageLogo: {
        width: DIMENSION(16),
        height: DIMENSION(16),
        shadowOffset: { width: 1, height: 2, },
        shadowColor: '#000',
        shadowOpacity: 0.5,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    header: {
        backgroundColor: COLORS.HEADERBACKGROUD,
        justifyContent: 'center',
        flexDirection: 'column',
        width: DIMENSION(100),
        height: isIphoneX?DIMENSION(29): DIMENSION(18)
    },
    imageIconRecruitment: {
        width: DIMENSION(10),
        height: DIMENSION(6),
    },
});

//make this component available to the app
export default GoBackHeader;

