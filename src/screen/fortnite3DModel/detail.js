//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar, Linking, Platform, Text, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS, FONTFAMILY } from '../../module';
import GoBackHeader from '../../component/header/goBackHeader';
import { translate } from "react-i18next";
import Loading from '../../component/loading/loading';
import { WebView } from "react-native-webview";
import { observer, inject } from 'mobx-react';

@inject('fortnite3DModels')
@observer
class DetailFortnite3DModelScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            visible: true
        }
    }
  
    hideSpinner() {
        this.setState({ visible: false });
      }
    render() {
        const { detailLink } = this.props.navigation.state.params.data
        console.log('detailLink: ', this.props.navigation.state.params.data)
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={Platform.OS === 'android' ? "light-content" : "light-content"}
                    backgroundColor={Platform.OS === 'android' ? "#000" : "#6a51ae"}
                />
                <GoBackHeader
                    // titile={'FNBR NEWS'}
                    nav={this.props.navigation}
                />
                  {/* <ActivityIndicator size="large" color="#582D79" /> */}
                <WebView
                    source={{ uri: detailLink }}
                    // startInLoadingState={true}
                    onLoadProgress={e => console.log(e.nativeEvent.progress)}
                />
                {/* {e.nativeEvent.progress && (
                    <ActivityIndicator size="large" color="#582D79" />
                )} */}
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
    
});

//make this component available to the app
export default translate("common")(DetailFortnite3DModelScreen);
