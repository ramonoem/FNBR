//import liraries
import React, { Component } from 'react';
import { Image, ToastAndroid, StyleSheet, StatusBar, Platform, Linking, TouchableOpacity, Text, FlatList, View } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS, FONTFAMILY, ISEMPTY } from '../../module';
import GoBackHeader from '../../component/header/goBackHeader';
import { translate } from "react-i18next";
import Loading from '../../component/loading/loading';
import { observer, inject } from 'mobx-react';
var Sound = require('react-native-sound');
var song = null;
// Sound.setCategory('Playback');

@inject('soundBoards')
@observer
class EmoteSoundScreen extends Component {
    Sound = require('react-native-sound');
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            song: null,
            pause: false,
            loading: false
        }
    }
    componentDidMount() {
        this.props.soundBoards.fetchDataSoundBoards()
        console.log("this.state.pause" , this.state.pause)
    };
    onPressButtonPlay(value) {
        const url = value;
        console.log("value:", value)
        Sound.setCategory('Playback');
        this.setState({pause : !this.state.pause, loading : this.state.pause == false ? true : false})
        this.state.pause == false ?
        this.sound = new Sound(url, null, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            else {
                this.setState({loading : false})
                this.sound.play()
            } 
        }):this.onPressButtonPause();
    }

    onPressButtonPause() {
        console.log("pause  ")
         sound = null
        if (this.sound != null) {
            this.sound.stop();
            this.setState({ pause: !this.state.pause });
        }
    }

    render() {
        const { listSoundBoards, refreshing, loading } = this.props.soundBoards
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={Platform.OS === 'android' ? "light-content" : "light-content"}
                    backgroundColor={Platform.OS === 'android' ? "#000" : "#6a51ae"}
                />
                <GoBackHeader
                    titile={'Emote Sound'}
                    nav={this.props.navigation}
                />
                {loading ?
                    <Loading />
                    : <View></View>
                }
                {
                    this.state.loading == true ? <Loading /> :null
                }
                <FlatList
                    onRefresh={() => { refreshing }}
                    refreshing={this.state.refreshing}
                    numColumns={1}
                    // onEndReachedThreshold={0.5}
                    // onEndReached={() =>this.fetchDataAdvertisements()}
                    showsVerticalScrollIndicator={false}
                    data={this.props.soundBoards.listSoundBoards}
                    keyExtractor={(item, index) => index.toString()}
                    style={[APPEARANCES.SHADOW, {
                        flex: 1,
                        paddingLeft: 7,

                    }]}
                    renderItem={({ item, index }) => {
                        if (item.rarity === "legendary") {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.onPressButtonPlay(item.fileUrl)} 
                                    style={[{
                                        width: DIMENSION(96.5),
                                        height: DIMENSION(25.6),
                                        padding: 2,
                                        marginRight: DIMENSION(2),
                                        marginBottom: DIMENSION(1),
                                        marginTop: DIMENSION(3),
                                        flexDirection: 'row',
                                        backgroundColor: '#FFF'
                                    }]}>
                                    <View style={[, , {
                                        width: DIMENSION(25),
                                        height: DIMENSION(25),
                                        backgroundColor: '#A5532C',
                                    }]}>
                                        <Image
                                            resizeMode={'stretch'}
                                            source={{ uri: item.imageUrl }}
                                            style={{ height: 25, width: null, flex: 1 }}
                                        />
                                    </View>
                                    <View style={{
                                        width: DIMENSION(65),
                                        height: DIMENSION(25),
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingLeft: 15,
                                        backgroundColor: "#FFF",
                                        flexDirection: 'row',
                                    }}>
                                        <Text
                                            textTransform={'uppercase'}
                                            style={{

                                                fontSize: FONTFAMILY.titleText,
                                                fontWeight: '900',
                                                textAlign: 'center',
                                                color: COLORS.DARK,
                                            }}>
                                            {item.title}
                                        </Text>

                                        <Image
                                            // resizeMode={'stretch'}
                                            source={require('../../assets/images/images.png')}
                                            style={{ color: 'gray', height: DIMENSION(15), width: DIMENSION(15), }}
                                        />

                                    </View>
                                </TouchableOpacity>

                            )
                        }
                        if (item.rarity === "rare") {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.onPressButtonPlay(item.fileUrl)}
                                    style={[{
                                        width: DIMENSION(96.5),
                                        height: DIMENSION(25.6),
                                        padding: 2,
                                        marginRight: DIMENSION(2),
                                        marginBottom: DIMENSION(1),
                                        marginTop: DIMENSION(3),
                                        flexDirection: 'row',
                                        backgroundColor: '#FFF'
                                    }]}>
                                    <View style={[, , {
                                        width: DIMENSION(25),
                                        height: DIMENSION(25),
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
                                        width: DIMENSION(65),
                                        height: DIMENSION(25),
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingLeft: 15,
                                        backgroundColor: "#FFF",
                                        flexDirection: 'row',
                                    }}>
                                        <Text
                                            textTransform={'uppercase'}
                                            style={{

                                                fontSize: FONTFAMILY.titleText,
                                                fontWeight: '900',
                                                textAlign: 'center',
                                                color: COLORS.DARK,
                                            }}>
                                            {item.title}
                                        </Text>

                                        <Image
                                            // resizeMode={'stretch'}
                                            source={require('../../assets/images/images.png')}
                                            style={{ color: 'gray', height: DIMENSION(15), width: DIMENSION(15), }}
                                        />

                                    </View>
                                </TouchableOpacity>

                            )
                        }
                        if (item.rarity === "epic") {
                            // this.setState({rare: '#582D79'})
                            return (
                                <TouchableOpacity
                                    onPress={() => this.onPressButtonPlay(item.fileUrl)} 
                                    style={[{
                                        width: DIMENSION(96.5),
                                        height: DIMENSION(25.6),
                                        padding: 2,
                                        marginRight: DIMENSION(2),
                                        marginBottom: DIMENSION(1),
                                        marginTop: DIMENSION(3),
                                        flexDirection: 'row',
                                        backgroundColor: '#FFF'
                                    }]}>
                                    <View style={[, , {
                                        width: DIMENSION(25),
                                        height: DIMENSION(25),
                                        backgroundColor: '#582D79',
                                    }]}>
                                        <Image
                                            resizeMode={'stretch'}
                                            source={{ uri: item.imageUrl }}
                                            style={{ height: 25, width: null, flex: 1 }}
                                        />
                                    </View>
                                    <View style={{
                                        width: DIMENSION(65),
                                        height: DIMENSION(25),
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingLeft: 15,
                                        backgroundColor: "#FFF",
                                        flexDirection: 'row',
                                    }}>
                                        <Text
                                            textTransform={'uppercase'}
                                            style={{

                                                fontSize: FONTFAMILY.titleText,
                                                fontWeight: '900',
                                                textAlign: 'center',
                                                color: COLORS.DARK,
                                            }}>
                                            {item.title}
                                        </Text>

                                        <Image
                                            // resizeMode={'stretch'}
                                            source={require('../../assets/images/images.png')}
                                            style={{ color: 'gray', height: DIMENSION(15), width: DIMENSION(15), }}
                                        />

                                    </View>
                                </TouchableOpacity>

                            )
                        }
                        if (item.rarity === "uncommon") {
                            // this.setState({rare: '#336F23'})
                            return (
                                <TouchableOpacity
                                    onPress={() => this.onPressButtonPlay(item.fileUrl)} 
                                    style={[{
                                        width: DIMENSION(96.5),
                                        height: DIMENSION(25.6),
                                        padding: 2,
                                        marginRight: DIMENSION(2),
                                        marginBottom: DIMENSION(1),
                                        marginTop: DIMENSION(3),
                                        flexDirection: 'row',
                                        backgroundColor: '#FFF'
                                    }]}>
                                    <View style={[, , {
                                        width: DIMENSION(25),
                                        height: DIMENSION(25),
                                        backgroundColor: '#336F23',
                                    }]}>
                                        <Image
                                            resizeMode={'stretch'}
                                            source={{ uri: item.imageUrl }}
                                            style={{ height: 50, width: null, flex: 1 }}
                                        />
                                    </View>
                                    <View style={{
                                        width: DIMENSION(65),
                                        height: DIMENSION(25),
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        paddingLeft: 15,
                                        backgroundColor: "#FFF",
                                        flexDirection: 'row',
                                    }}>
                                        <Text
                                            textTransform={'uppercase'}
                                            style={{

                                                fontSize: FONTFAMILY.titleText,
                                                fontWeight: '900',
                                                textAlign: 'center',
                                                color: COLORS.DARK,
                                            }}>
                                            {item.title}
                                        </Text>

                                        <Image
                                            // resizeMode={'stretch'}
                                            source={require('../../assets/images/images.png')}
                                            style={{ color: 'gray', height: DIMENSION(15), width: DIMENSION(15), }}
                                        />

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
export default translate("common")(EmoteSoundScreen);
