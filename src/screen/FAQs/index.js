//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar, Platform, Linking,TouchableOpacity, Text, FlatList, View } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS, FONTFAMILY } from '../../module';
import GoBackHeader from '../../component/header/goBackHeader';
import { translate } from "react-i18next";
import Loading from '../../component/loading/loading';
import { observer, inject } from 'mobx-react';

@inject('soundBoards')
@observer
class FAQs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false
        }
    }
    componentDidMount() {
        this.props.soundBoards.fetchDataSoundBoards()
    };

    render() {
        const { listSoundBoards, refreshing, loading } = this.props.soundBoards
        console.log("listSoundBoards", listSoundBoards)
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
                {loading ?
                    <Loading />
                    : <View></View>
                }
                <FlatList
                    onRefresh={() => { refreshing }}
                    refreshing={this.state.refreshing}
                    numColumns={3}
                    // onEndReachedThreshold={0.5}
                    // onEndReached={() =>this.fetchDataAdvertisements()}
                    showsVerticalScrollIndicator={false}
                    data={listSoundBoards}
                    keyExtractor={(item, index) => index.toString()}
                    style={[APPEARANCES.SHADOW, {
                        flex: 1,
                        paddingLeft: 7,
                    }]}
                    renderItem={({ item, index }) => {
                        console.log("item", item)
                        if (item.rarityType === "legendary") {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(item.detailLink)
                                    }}
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
                                            source={{ uri: item.imageUrl }}
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
                                        {/* <Text style={{
                                            fontSize: FONTFAMILY.titleText,
                                            color: COLORS.TEXT,
                                            paddingTop: 2,
                                        }}>
                                            {item.vBuck}
                                        </Text> */}
                                    </View>
                                </TouchableOpacity>

                            )
                        }
                        if (item.rarityType === "rare") {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(item.detailLink)
                                    }} style={[, , {
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
                                            source={{ uri: item.imageUrl }}
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
                                        {/* <Text style={{
                                            fontSize: FONTFAMILY.subTitleText,
                                            color: COLORS.TEXT,
                                            paddingTop: 5,
                                        }}>
                                            {item.vBuck}
                                        </Text> */}
                                    </View>
                                </TouchableOpacity>

                            )
                        }
                        if (item.rarityType === "epic") {
                            // this.setState({rare: '#582D79'})
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(item.detailLink)
                                    }} style={[, , {
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
                                            source={{ uri: item.imageUrl }}
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
                                        {/* <Text style={{
                                            fontSize: FONTFAMILY.subTitleText,
                                            color: COLORS.TEXT,
                                            paddingTop: 5,
                                        }}>
                                            {item.vBuck}
                                        </Text> */}
                                    </View>
                                </TouchableOpacity>

                            )
                        }
                        if (item.rarityType === "uncommon") {
                            // this.setState({rare: '#336F23'})
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        Linking.openURL(item.detailLink)
                                    }} style={[, , {
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
                                            source={{ uri: item.imageUrl }}
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
                                        {/* <Text style={{
                                            fontSize: FONTFAMILY.subTitleText,
                                            color: COLORS.TEXT,
                                            paddingTop: 5,
                                        }}>
                                            {item.title}
                                        </Text> */}
                                    </View>
                                </TouchableOpacity>

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
export default translate("common")(FAQs);
