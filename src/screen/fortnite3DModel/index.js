//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar, Platform, ActivityIndicator, TouchableOpacity, SafeAreaView, Text, FlatList, View } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS, FONTFAMILY } from '../../module';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import GoBackHeader from '../../component/header/goBackHeader';
import isIphoneX from '../../module/platform';
import { translate } from "react-i18next";
import Loading from '../../component/loading/loading';
import { observer, inject } from 'mobx-react';
import { WebView } from "react-native-webview";

@inject('fortnite3DModels')
@observer
class Fortnite3DModelScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            data: null
        }
    }
    componentWillMount() {

    }
    getData() {
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
                data: this.props.fortnite3DModels.listFortnite3DModels
            })
        }, 1000)
    }
    componentDidMount() {
        this.props.fortnite3DModels.fetchDataFortnite3DModels()
        this.getData();
    };
    componentDidUpdate = (prevProps, prevState) => {
        console.log("prevProps", prevProps)
    }

    ActivityIndicatorLoadingView() {
        return (
            <ActivityIndicator
                color='#582D79'
                size='large'
                style={styles.ActivityIndicatorStyle}
            />
        );
    }
    _onDetail = (item) => {
        this.props.navigation.navigate({
            routeName: "DetailFortnite3DModelScreen",
            key: "DetailFortnite3DModelScreen",
            params: {
                data: item
            }
        });
    }
    render() {
        const { listFortnite3DModels, refreshing, loading } = this.props.fortnite3DModels
        // console.log("listFortnite3DModels", listFortnite3DModels)
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={Platform.OS === 'android' ? "light-content" : "light-content"}
                    backgroundColor={Platform.OS === 'android' ? "#000" : "#6a51ae"}
                />
                <View style={styles.headerContainer}>
                    <SafeAreaView style={styles.header}>
                        <View style={styles.rowHeader}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('AppRoute')}
                                style={{
                                    marginLeft: DIMENSION(2),
                                    marginRight: DIMENSION(5)
                                }}
                            >
                                <AntDesign style={styles.icon}
                                    name="arrowleft"
                                />
                            </TouchableOpacity>
                            <Text style={[styles.headerTittle, {
                            }]}>{this.props.t("FNBR NEWS")}</Text>
                            <MaterialIcons style={styles.icon} name={this.props.exicon} />
                        </View>
                    </SafeAreaView>
                </View>
               
                {this.state.data ?
                    <FlatList
                        onRefresh={() => { refreshing }}
                        refreshing={this.state.refreshing}
                        numColumns={3}
                        // onEndReachedThreshold={0.5}
                        // onEndReached={() =>this.fetchDataAdvertisements()}
                        showsVerticalScrollIndicator={false}
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        style={[APPEARANCES.SHADOW, {
                            flex: 1,
                            paddingLeft: 7,
                        }]}
                        renderItem={({ item, index }) => {
                            if (item.rarityType === "legendary") {
                                return (
                                    <TouchableOpacity
                                        onPress={() => this._onDetail(item)}
                                        style={[{
                                            width: DIMENSION(31),
                                            height: DIMENSION(61),
                                            padding: 2,
                                            marginRight: DIMENSION(2),
                                            marginBottom: DIMENSION(1),
                                            marginTop: DIMENSION(3),
                                        }]}>
                                        <View style={[, , {
                                            width: DIMENSION(30),
                                            height: DIMENSION(40),
                                            backgroundColor: '#A5532C',
                                        }]}>
                                            <Image
                                                resizeMode={'stretch'}
                                                source={{ uri: item.imageThumbnail }}
                                                style={{ height: 25, width: null, flex: 1 }}
                                            />
                                        </View>
                                        <View style={{
                                            width: DIMENSION(30),
                                            height: DIMENSION(20),
                                            padding: 2,
                                            paddingTop: 5,
                                            marginBottom: DIMENSION(5),
                                            backgroundColor: '#C97449',
                                            alignItems: "center",
                                        }}>
                                            <Text
                                                textTransform={"uppercase"}
                                                style={{
                                                    fontSize: FONTFAMILY.titleText,
                                                    fontWeight: '900',
                                                    textAlign: 'center',
                                                    color: COLORS.TEXT,

                                                }}>
                                                {item.title}
                                            </Text>
                                            <Text style={{
                                                fontSize: FONTFAMILY.titleText,
                                                color: COLORS.TEXT,
                                                paddingTop: 2,
                                            }}>
                                                {item.vBuck}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            }
                            if (item.rarityType === "rare") {
                                return (
                                    <TouchableOpacity
                                        onPress={() => this._onDetail(item)}
                                        style={[, , {
                                            width: DIMENSION(31),
                                            height: DIMENSION(61),
                                            padding: 2,
                                            marginRight: DIMENSION(2),
                                            marginBottom: DIMENSION(1),
                                            marginTop: DIMENSION(3),
                                        }]}>
                                        <View style={[, , {
                                            width: DIMENSION(30),
                                            height: DIMENSION(40),
                                            backgroundColor: '#2763A6',
                                        }]}>
                                            <Image
                                                resizeMode={'stretch'}
                                                source={{ uri: item.imageThumbnail }}
                                                style={{ height: 25, width: null, flex: 1 }}
                                            />
                                            {/* <View style={{  width: DIMENSION(30), height: DIMENSION(5), backgroundColor: '#2763A6', }}>

                                        </View> */}
                                        </View>
                                        <View style={{
                                            width: DIMENSION(30),
                                            height: DIMENSION(20),
                                            padding: 2,
                                            paddingTop: 5,
                                            marginBottom: DIMENSION(5),
                                            backgroundColor: '#3B96E2',
                                            alignItems: "center"
                                        }}>
                                            <Text
                                                textTransform={'uppercase'}
                                                style={{

                                                    fontSize: FONTFAMILY.titleText,
                                                    fontWeight: '900',
                                                    textAlign: 'center',
                                                    color: COLORS.TEXT,
                                                }}>
                                                {item.title}
                                            </Text>
                                            <Text style={{
                                                fontSize: FONTFAMILY.subTitleText,
                                                color: COLORS.TEXT,
                                                paddingTop: 5,
                                            }}>
                                                {item.vBuck}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            }
                            if (item.rarityType === "epic") {
                                // this.setState({rare: '#582D79'})
                                return (
                                    <TouchableOpacity
                                        onPress={() => this._onDetail(item)}
                                        style={[, , {
                                            width: DIMENSION(31),
                                            height: DIMENSION(61),
                                            padding: 2,
                                            marginRight: DIMENSION(2),
                                            marginBottom: DIMENSION(1),
                                            marginTop: DIMENSION(3),
                                        }]}>
                                        <View style={[, , {
                                            width: DIMENSION(30),
                                            height: DIMENSION(40),
                                            backgroundColor: '#582D79',
                                        }]}>
                                            <Image
                                                resizeMode={'stretch'}
                                                source={{ uri: item.imageThumbnail }}
                                                style={{ height: 25, width: null, flex: 1 }}
                                            />
                                        </View>
                                        <View style={{
                                            width: DIMENSION(30),
                                            height: DIMENSION(20),
                                            padding: 2,
                                            paddingTop: 5,
                                            marginBottom: DIMENSION(5),
                                            backgroundColor: '#8D44C3',
                                            alignItems: "center"
                                        }}>
                                            <Text
                                                textTransform={'uppercase'}
                                                style={{
                                                    fontSize: FONTFAMILY.titleText,
                                                    fontWeight: '900',
                                                    // width: DIMENSION(25),
                                                    textAlign: 'center',
                                                    color: COLORS.TEXT,
                                                }}>
                                                {item.title}
                                            </Text>
                                            <Text style={{
                                                fontSize: FONTFAMILY.subTitleText,
                                                color: COLORS.TEXT,
                                                paddingTop: 5,
                                            }}>
                                                {item.vBuck}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            }
                            if (item.rarityType === "uncommon") {
                                // this.setState({rare: '#336F23'})
                                return (
                                    <TouchableOpacity
                                        onPress={() => this._onDetail(item)}
                                        style={[, , {
                                            width: DIMENSION(31),
                                            height: DIMENSION(61),
                                            padding: 2,
                                            marginRight: DIMENSION(2),
                                            marginBottom: DIMENSION(1),
                                            marginTop: DIMENSION(3),
                                        }]}>
                                        <View style={[, , {
                                            width: DIMENSION(30),
                                            height: DIMENSION(40),
                                            backgroundColor: '#336F23',
                                        }]}>
                                            <Image
                                                resizeMode={'stretch'}
                                                source={{ uri: item.imageThumbnail }}
                                                style={{ height: 50, width: null, flex: 1 }}
                                            />
                                        </View>
                                        <View style={{
                                            width: DIMENSION(30),
                                            height: DIMENSION(20),
                                            padding: 2,
                                            paddingTop: 5,
                                            marginBottom: DIMENSION(5),
                                            backgroundColor: '#4D942F',
                                            alignItems: "center"
                                        }}>
                                            <Text
                                                textTransform={'uppercase'}
                                                style={{
                                                    fontSize: FONTFAMILY.titleText,
                                                    fontWeight: '900',
                                                    textAlign: 'center',
                                                    color: COLORS.TEXT,
                                                    textTransform: 'uppercase'
                                                }}>
                                                {item.title}
                                            </Text>
                                            <Text style={{
                                                fontSize: FONTFAMILY.subTitleText,
                                                color: COLORS.TEXT,
                                                paddingTop: 5,
                                            }}>
                                                {item.vBuck}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            }

                        }}
                    />
                    :
                        <Loading />
                     
                }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
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
       

    },
    header: {
        backgroundColor: COLORS.HEADERBACKGROUD,
        justifyContent: 'center',
        flexDirection: 'column',
        width: DIMENSION(100),
        height: isIphoneX ? DIMENSION(29) : DIMENSION(18)
    },
    imageIconRecruitment: {
        width: DIMENSION(10),
        height: DIMENSION(6),
    },
});

//make this component available to the app
export default translate("common")(Fortnite3DModelScreen);
