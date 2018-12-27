//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar, Platform, Text, FlatList, View } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS, FONTFAMILY } from '../../module';
import HeaderScreen from '../../component/header/index';
import { translate } from "react-i18next";
import Loading from '../../component/loading/loading';
import { observer, inject } from 'mobx-react';

@inject('dailyShops')
@observer
class DailyShopScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false
        }
    }
    componentDidMount() {
        this.props.dailyShops.fetchDataDailyShop()
    };

    render() {
        const { listDailyShop, refreshing, loading } = this.props.dailyShops
        console.log("listDailyShop", this.state.rare)
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={Platform.OS === 'android' ? "light-content" : "light-content"}
                    backgroundColor={Platform.OS === 'android' ? "#000" : "#6a51ae"}
                />
                <HeaderScreen
                    titile={this.props.t('FNBR NEWS')}
                    nav={this.props.navigation}
                />
                 {loading ?
                    <Loading />
                    : <View></View>

                }
                <FlatList
                    onRefresh={() => { refreshing }}
                    refreshing={this.state.refreshing}
                    numColumns={2}
                    // onEndReachedThreshold={0.5}
                    // onEndReached={() =>this.fetchDataAdvertisements()}
                    showsVerticalScrollIndicator={false}
                    data={listDailyShop}
                    keyExtractor={(item, index) => index.toString()}
                    style={[APPEARANCES.SHADOW, {
                        width: DIMENSION(100),
                        height: DIMENSION(75)
                    }]}
                    renderItem={({ item, index }) => {
                        if (item.item.rarity === "legendary") {
                            return (
                                <View style={[, , {
                                    width: DIMENSION(50),
                                    padding: 6.5,
                                    // marginTop: DIMENSION(5),
                                    height: DIMENSION(65),
                                    marginTop: DIMENSION(3)
                                }]}>
                                    <View style={[, , {
                                        width: DIMENSION(47),
                                        // padding: 10,
                                        backgroundColor: '#A5532C',
                                        height: DIMENSION(50)
                                    }]}>
                                        <Image
                                            resizeMode={'stretch'}
                                            source={{ uri: item.item.image }}
                                            style={{ height: 50, width: null, flex: 1 }}
                                        />
                                    </View>
                                    <View style={{
                                        width: DIMENSION(47),
                                        padding: 2,
                                        paddingTop: 5,
                                        height: DIMENSION(15),
                                        backgroundColor: '#C97449',
                                        alignItems: "center"
                                    }}>
                                        <Text
                                            textTransform={"uppercase"}
                                            style={{
                                                fontSize: FONTFAMILY.titleText,
                                                fontWeight: '900',
                                                textAlign: 'center',
                                                color: COLORS.TEXT,

                                            }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{
                                            fontSize: FONTFAMILY.titleText,
                                            color: COLORS.TEXT,
                                            paddingTop: 2,
                                        }}>
                                            {item.cost}
                                        </Text>
                                    </View>
                                </View>

                            )
                        }
                        if (item.item.rarity === "rare") {
                            return (
                                <View style={[, , {
                                    width: DIMENSION(50),
                                    padding: 6.5,
                                    height: DIMENSION(65),
                                    marginTop: DIMENSION(3)
                                }]}>
                                    <View style={[, , {
                                        width: DIMENSION(47),
                                        backgroundColor: '#2763A6',
                                        height: DIMENSION(50)
                                    }]}>
                                        <Image
                                            resizeMode={'stretch'}
                                            source={{ uri: item.item.image }}
                                            style={{ height: 50, width: null, flex: 1 }}
                                        />
                                    </View>
                                    <View style={{
                                        padding: 2,
                                        width: DIMENSION(47),
                                        height: DIMENSION(15),
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
                                            {item.name}
                                        </Text>
                                        <Text style={{
                                            fontSize: FONTFAMILY.subTitleText,
                                            color: COLORS.TEXT,
                                            paddingTop: 5,
                                        }}>
                                            {item.cost}
                                        </Text>
                                    </View>
                                </View>

                            )
                        }
                        if (item.item.rarity === "epic") {
                            // this.setState({rare: '#582D79'})
                            return (
                                <View style={[, , {
                                    width: DIMENSION(50),
                                    padding: 6.5,
                                    // marginTop: DIMENSION(5),
                                    height: DIMENSION(65),
                                    marginTop: DIMENSION(3)
                                }]}>
                                    <View style={[, , {
                                        width: DIMENSION(47),
                                        // padding: 10,
                                        backgroundColor: '#582D79',
                                        height: DIMENSION(50)
                                    }]}>
                                        <Image
                                            resizeMode={'stretch'}
                                            source={{ uri: item.item.image }}
                                            style={{ height: 50, width: null, flex: 1 }}
                                        />
                                    </View>
                                    <View style={{
                                        width: DIMENSION(47),
                                        padding: 2,
                                        height: DIMENSION(15),
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
                                            {item.name}
                                        </Text>
                                        <Text style={{
                                            fontSize: FONTFAMILY.subTitleText,
                                            color: COLORS.TEXT,
                                            paddingTop: 5,
                                        }}>
                                            {item.cost}
                                        </Text>
                                    </View>
                                </View>

                            )
                        }
                        if (item.item.rarity === "uncommon") {
                            // this.setState({rare: '#336F23'})
                            return (
                                <View style={[, , {
                                    width: DIMENSION(50),
                                    padding: 6.5,
                                    // marginTop: DIMENSION(5),
                                    height: DIMENSION(65),
                                    marginTop: DIMENSION(3)
                                }]}>
                                    <View style={[, , {
                                        width: DIMENSION(47),
                                        // padding: 10,
                                        backgroundColor: '#336F23',
                                        height: DIMENSION(50)
                                    }]}>
                                        <Image
                                            resizeMode={'stretch'}
                                            source={{ uri: item.item.image }}
                                            style={{ height: 50, width: null, flex: 1 }}
                                        />
                                    </View>
                                    <View style={{
                                        width: DIMENSION(47),
                                        padding: 2,
                                        height: DIMENSION(15),
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
                                            {item.name}
                                        </Text>
                                        <Text style={{
                                            fontSize: FONTFAMILY.subTitleText,
                                            color: COLORS.TEXT,
                                            paddingTop: 5,
                                        }}>
                                            {item.cost}
                                        </Text>
                                    </View>
                                </View>

                            )
                        }

                    }}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
});

//make this component available to the app
export default translate("common")(DailyShopScreen);
