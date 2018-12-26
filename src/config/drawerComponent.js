//import liraries
import React, { Component } from 'react';
import { View, Platform, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Image, Modal, TextInput, Alert, ScrollView } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import isIphoneX from '../module/platform';
import Foundation from "react-native-vector-icons/Foundation";
import { DIMENSION, COLORS } from '../module';
// import ChangeLanguageComponent from '../i18n/changeLanguage';
import { translate } from "react-i18next";

const activeColor = COLORS.HEADERTEXT
const inActiveColor = COLORS.SUBTEXT
class DrawerComponent extends Component {
    constructor(prop) {
        super(prop);
        this.state = {

        }
    }
    onChanged(text) {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
            else {
                alert("please enter numbers only");
            }
        }
        this.setState({ phone: newText });
    }


    _onClick(screen) {
        const nav = this.props.navigation
        nav.navigate(screen)
        this.props.navigation.closeDrawer()

    }
    _onClickLeaveCommand() {
        this.props.navigation.closeDrawer()
        // this.porps.navigation.navigate('Home')
        this.setState({ modalVisible: true })
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    onSelecteMenu = (menu) => {
        this.setState({ selectedMenu: menu })
        switch (menu) {
            case 1:
                return (this._onClick("FortniteTweetScreen"))
            case 2:
                return (this.props.navigation.navigate('ProTipsVideoScreen'))
            case 3:
                return (this.props.navigation.navigate('Fortnite3DModelScreen'))
            case 4:
                return (this.props.navigation.navigate('EmoteSoundScreen'))
            case 5:
                return (this.props.navigation.navigate('EmergencyScreen'))
            case 6:
                return (this.props.navigation.navigate('ShareThisApp'))
            case 7:
                return (this.props.navigation.navigate('SubscribeUs'))
            case 8:
                return (this.props.navigation.navigate('HelpUsTranslate'))
            case 9:
                return (this.props.navigation.navigate('FAQs'))
        }
    };
    render() {
        const { selectedMenu } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this._onClick('Profile')}

                    style={styles.menuHeader}>

                    <Image
                        source={require('../../src/assets/images/ic_launcher_app.png')}
                        style={{ width: DIMENSION(32), height: DIMENSION(32) }}
                    />
                    <Text style={[styles.titleHeader, {
                        // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn
                    }]}>{this.props.t("Version 2.6")}</Text>
                </TouchableOpacity>
                <View style={styles.bodyMenu}>
                    <TouchableOpacity
                        onPress={() => this.onSelecteMenu(1)}
                        style={styles.touchableOpacityViewBody}
                    >
                        <View style={[styles.buttomMenu]}>
                            <Image
                                source={require('../../src/assets/images/ic_twitter.png')}
                                style={[styles.imageIcon, this.state.selectedMenu === 1 ? { tintColor: activeColor } : { tintColor: inActiveColor }]}
                            />
                            <Text style={[styles.textMenu, {
                                // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn,
                                fontSize: FONTFAMILY.titleText
                            }]}>{this.props.t("Fortnite Tweet")}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onSelecteMenu(2)}
                        style={styles.touchableOpacityViewBody}
                    >
                        <View style={[styles.buttomMenu]}>
                            <Image
                                source={require('../../src/assets/images/ic_tips.png')}
                                style={[styles.imageIcon, this.state.selectedMenu === 2 ? { tintColor: activeColor } : { tintColor: inActiveColor }]}
                            />
                            <Text style={[styles.textMenu, {
                                // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn,
                                fontSize: FONTFAMILY.titleText
                            }]}>{this.props.t("Pro Tips (Video)")}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onSelecteMenu(3)}
                        style={styles.touchableOpacityViewBody}
                    >
                        <View style={[styles.buttomMenu]}>
                            <Image
                                source={require('../../src/assets/images/ic_3d.png')}
                                style={[styles.imageIcon, this.state.selectedMenu === 3 ? { tintColor: activeColor } : { tintColor: inActiveColor }]}
                            />
                            <Text style={[styles.textMenu, {
                                // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn,
                                fontSize: FONTFAMILY.titleText
                            }]}>{this.props.t("Fortnite 3D Model")}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onSelecteMenu(4)}
                        style={styles.touchableOpacityViewBody}
                    >
                        <View style={[styles.buttomMenu]}>
                            <Image
                                source={require('../../src/assets/images/ic_soundboard.png')}
                                style={[styles.imageIcon, this.state.selectedMenu === 4 ? { tintColor: activeColor } : { tintColor: inActiveColor }]}
                            />
                            <Text style={[styles.textMenu, {
                                // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn,
                                fontSize: FONTFAMILY.titleText
                            }]}>{this.props.t("Emote Sound")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyMenu2}>
                    <TouchableOpacity
                        onPress={() => this.onSelecteMenu(5)}
                        style={styles.touchableOpacityViewBody}
                    >
                        <View style={[styles.buttomMenu]}>
                            <Image
                                source={require('../../src/assets/images/ic_share.png')}
                                style={[styles.imageIcon, this.state.selectedMenu === 5 ? { tintColor: activeColor } : { tintColor: inActiveColor }]}
                            />
                            <Text style={[styles.textMenu, {
                                // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn,
                                fontSize: FONTFAMILY.titleText
                            }]}>{this.props.t("Share this app")}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onSelecteMenu(6)}
                        style={styles.touchableOpacityViewBody}
                    >
                        <View style={[styles.buttomMenu]}>
                            <Image
                                source={require('../../src/assets/images/subscribe_arrow_pointer_point-512.png')}
                                style={[styles.imageIcon, this.state.selectedMenu === 6 ? { tintColor: activeColor } : { tintColor: inActiveColor }]}
                            />
                            <Text style={[styles.textMenu, {
                                // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn,
                                fontSize: FONTFAMILY.titleText
                            }]}>{this.props.t("Subscribe Us")}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onSelecteMenu(7)}
                        style={styles.touchableOpacityViewBody}
                    >
                        <View style={[styles.buttomMenu]}>
                            <Image
                                source={require('../../src/assets/images/ic_3d.png')}
                                style={[styles.imageIcon, this.state.selectedMenu === 7 ? { tintColor: activeColor } : { tintColor: inActiveColor }]}
                            />
                            <Text style={[styles.textMenu, {
                                // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn,
                                fontSize: FONTFAMILY.titleText
                            }]}>{this.props.t("Help Us translate")}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.onSelecteMenu(8)}
                        style={styles.touchableOpacityViewBody}
                    >
                        <View style={[styles.buttomMenu]}>
                            <Image
                                source={require('../../src/assets/images/ic_soundboard.png')}
                                style={[styles.imageIcon, this.state.selectedMenu === 8 ? { tintColor: activeColor } : { tintColor: inActiveColor }]}
                            />
                            <Text style={[styles.textMenu, {
                                // fontFamily: this.props.i18n.language == 'kh' ? FONTFAMILY.mainFontKh : FONTFAMILY.mainFontEn,
                                fontSize: FONTFAMILY.titleText
                            }]}>{this.props.t("FAQs")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    viewStyleBody: { marginTop: 5, marginRight: DIMENSION(20) },
    touchableOpacityViewBody: { 
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 6.5,
        paddingTop: 20
    },
    applyStyle: { flexDirection: 'row', marginTop: DIMENSION(1), borderRadius: DIMENSION(50), alignItems: 'center', justifyContent: 'center', },
    textInsertPhone: {
        // paddingLeft: DIMENSION(5),
        fontSize: 16,
        color: COLORS.SUBTEXT
    },
    insertPhone: {
        borderBottomWidth: 0.7,
        borderColor: '#000',
    },
    buttomCloesModal: {
        // paddingRight: 20,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.TEXT,
        overflow: 'hidden'
    },
    containerKeyBoard: {
        flex: 1,
        justifyContent: 'center'
    },
    menuHeader: {
        marginTop: DIMENSION(isIphoneX ? 5 : -3),
        backgroundColor: COLORS.TEXT,
        width: DIMENSION(74.5),
        height: DIMENSION(53),
        alignItems: 'center',
        shadowOffset: { width: 1, height: 2, },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        paddingVertical: DIMENSION(9),



    },
    imageIcon: {
        width: DIMENSION(6),
        height: DIMENSION(6),
        tintColor: '#FECB45',
    },
    imageIconRecruitment: {
        width: DIMENSION(6),
        height: DIMENSION(7),
        tintColor: '#FECB45',
    },
    profile: {
        width: DIMENSION(22),
        backgroundColor: '#DAE4E4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        height: DIMENSION(22),
    },
    titleHeader: {
        color: COLORS.SUBTEXT,
        paddingVertical: DIMENSION(2),
        letterSpacing: 0.5,
        fontSize: 12,
        // fontFamily: 'kantumruy',
        letterSpacing: 1,
        paddingLeft: 10,
    },
    bodyMenu: {
        backgroundColor: COLORS.TEXT,
        paddingLeft: DIMENSION(3),
        width: DIMENSION(100),
        height: DIMENSION(60),
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#E0E0E0'
    },
    bodyMenu2:{
        backgroundColor: COLORS.TEXT,
        paddingLeft: DIMENSION(3),
        width: DIMENSION(100),
        height: DIMENSION(60),
        // borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#E0E0E0'
    },
    subBodyMenu: {
        marginTop: DIMENSION(2),
        flexDirection: 'row',
        width: DIMENSION(100),
        alignItems: 'center',
        marginBottom: DIMENSION(4),
        marginLeft: DIMENSION(2),
    },
    buttomMenu: {
        width: DIMENSION(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttomMenuBank: {
        width: DIMENSION(100),
        flexDirection: 'row',
        marginLeft: -1,
    },
    chagneLanguage: {
        flexDirection: 'row',
        // paddingHorizontal: DIMENSION(isIphoneX ? 10 : 3),
    },
    textMenu: {
        marginLeft: DIMENSION(isIphoneX ? 5 : 7),
        color: '#212121',
        letterSpacing: 1,
    },
    imagelanguage: {
        width: DIMENSION(8),
        height: DIMENSION(8),
        marginLeft: DIMENSION(15),
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1
    },
    HeaderNotification: {
        marginTop: DIMENSION(4),
        marginBottom: DIMENSION(-2),
    },
    textHeaderNotification: {
        color: COLORS.SUBTEXT,
        fontSize: 18,
        // fontFamily: 'kantumruy',
    },
    lineBorderNotificaion: {
        width: DIMENSION(95),
        marginLeft: DIMENSION(2),
        height: DIMENSION(0.2),
        backgroundColor: '#FECB45',
    },
    textNotification: {
        textAlign: 'justify',
        paddingVertical: DIMENSION(isIphoneX ? 2 : 2),
        paddingHorizontal: DIMENSION(isIphoneX ? 2 : 1),
        // fontFamily: 'kantumruy',
        color: '#817E7E',

    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // paddingTop: DIMENSION(0),
        marginBottom: DIMENSION(5),
        borderRadius: DIMENSION(5),
        paddingBottom: DIMENSION(2),
        paddingLeft: DIMENSION(5),
    },

    cartNotification: {
        // height: DIMENSION(33),
        width: DIMENSION(100),
        paddingLeft: DIMENSION(2),
        paddingRight: DIMENSION(2),
        paddingTop: DIMENSION(1),
        // alignItems: 'center',

    },
    textInput: {
        // width: '90%',
        height: DIMENSION(33),
        color: COLORS.SUBTEXT,
        borderColor: COLORS.SUBTEXT,
        borderTopWidth: 1,
        borderLeftWidth: 0.8,
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        paddingLeft: DIMENSION(2),
        // paddingTop: DIMENSION(10),

    },
    cartButttomUploadCV: {
        width: DIMENSION(60),
        height: DIMENSION(14),
        backgroundColor: '#FFCC33',
        borderRadius: DIMENSION(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
});

//make this component available to the app
export default translate("common")(DrawerComponent);
