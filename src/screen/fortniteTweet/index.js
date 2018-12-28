//import liraries
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  StatusBar,
  Linking,
  Platform,
  Text,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  View,
  // WebView
} from 'react-native';
import isIphoneX from '../../module/platform';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { DIMENSION, APPEARANCES, COLORS, FONTFAMILY } from '../../module';
import GoBackHeader from '../../component/header/goBackHeader';
import { translate } from "react-i18next";
import Loading from '../../component/loading/loading';
import { WebView } from "react-native-webview";

class FortniteTweetScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        refreshing: false,
        data:  null,
        loading: false
    }
}
componentDidMount() {
  this.setState({ data: 'https://twitter.com/FortniteGame?ref_src=twsrc%5Etfw%E2%80%9C%3ETweets'})
}

componentWillUnmount = () => {
  this.setState({ data: 'https://twitter.com/FortniteGame?ref_src=twsrc%5Etfw%E2%80%9C%3ETweets'})
};
  ActivityIndicatorLoadingView() {
    return (
      <ActivityIndicator
        color='#582D79'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }
  render() {
    const html = '<a class=“twitter-timeline” href=“https://twitter.com/FortniteGame?ref_src=twsrc%5Etfw“>Tweets by FortniteGame</a> <script async src=“https://platform.twitter.com/widgets.js” charset=“utf-8"></script>'
    const Constants = {
      javascript: {
          injection: `
              Array.from(document.getElementsByTagName('input')).forEach((item) => {
                  if(item.type == "search") {
                      item.value = "look at me, I'm injecting";
                  }
              })
          `
      }
  }
    console.log(`v:1`);
    console.log(`html info: ${JSON.stringify(html)}`);
    console.log(`javascript: ${Constants.javascript.injection}`);
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
                onPress={() => this.props.navigation.goBack()}
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
              }]}>{this.props.t("Fortnite Tweet")}</Text>
              <MaterialIcons style={styles.icon} name={this.props.exicon} />
            </View>
          </SafeAreaView>
        </View>
        {this.state.data?
                    <WebView
                    allowFileAccess={true}
                    scalesPageToFit={true}
                    originWhitelist={['*']}
                    source={{ uri: this.state.data }}
                    onLoadProgress={e => console.log(e.nativeEvent.progress)}
                    style={styles.WebViewStyle} 
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    renderLoading={this.ActivityIndicatorLoadingView} 
                    startInLoadingState={true}  
                />
                :null
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
    alignItems: 'center',
    justifyContent: 'center',

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
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

  }

});

//make this component available to the app
export default translate("common")(FortniteTweetScreen);

//make this component available to the app
