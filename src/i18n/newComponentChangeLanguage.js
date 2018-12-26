import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet,
    Image

} from "react-native";
import i18n from "./index";
import { translate } from "react-i18next";
import { DIMENSION } from '../module';
import isIphoneX from "../module/platform";


class NewComponentChangeLanguage extends Component {
    onSelectedLang(val) {
        AsyncStorage.setItem("@lang:code", val);
        i18n.changeLanguage(val);
    }
    _onClickKhmer = () => {
        const { nav } = this.props
        this.onSelectedLang("kh")
        nav.navigate("Home")
    }
    _onClickEnglish = () => {
        const { nav } = this.props
        this.onSelectedLang("en")
        nav.navigate("Home")
    }

    render() {

        return (
            <View style={styles.container}>
                <Image
                    source={require("../asset/images/PengHuothLogo.png")}
                    style={{ width: DIMENSION(30), height: DIMENSION(30) }}
                />
                <View style={{ flexDirection: "column", marginTop: DIMENSION(20) }}>
                    <TouchableOpacity
                        style={{
                            paddingLeft: 8,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={this._onClickKhmer}
                    >
                        <Text style={[styles.languageKhmer, {
                            //   fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKhB : FONTFAMILY.mainFontEn  ,
                            // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn
                        }]}>
                            ភាសាខ្មែរ
                            </Text>
                        {/* <Image
                                source={require("../asset/images/kh.png")}
                                style={{ width: 30, height: 21 }}
                            /> */}
                    </TouchableOpacity>
                    <Image
                        source={require("../asset/images/ChooseLanguageLine.png")}
                        style={{ width: DIMENSION(100), height: DIMENSION(2), marginTop: DIMENSION(2), marginBottom: DIMENSION(2) }}
                    />
                    <TouchableOpacity
                        style={{
                            paddingLeft: 8,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={this._onClickEnglish}
                    >
                        <Text style={[styles.languageEnglish, {
                            //   fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKhB : FONTFAMILY.mainFontEn  
                        }]}>
                            English
                            </Text>
                        {/* <Image
                                source={require("../image/england.png")}
                                style={{ width: 30, height: 21 }}
                            /> */}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: isIphoneX ? DIMENSION(50) : DIMENSION(25),

    },
    languageKhmer: {
        fontSize: 26,
        color: '#FECB45',
        // fontFamily: 'kantumruy',

    },
    languageEnglish: {
        fontSize: 25,
        color: '#FECB45',
        fontWeight: '500',
    },


})
export default translate("common")(NewComponentChangeLanguage);
