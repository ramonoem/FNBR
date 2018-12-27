//import liraries
import React, { Component } from 'react';
import { Image, StyleSheet, StatusBar, Platform, Linking,TouchableOpacity, Text, FlatList, View } from 'react-native';
import { DIMENSION, APPEARANCES, COLORS, FONTFAMILY } from '../../module';
import GoBackHeader from '../../component/header/goBackHeader';
import { translate } from "react-i18next";
import Loading from '../../component/loading/loading';
import { observer, inject } from 'mobx-react';

@inject('proTipsVideos')
@observer
class ProTipsVideoScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            data: this.props.proTipsVideos.listProTipsVideos
        }
    }
    componentDidMount() {
        this.props.proTipsVideos.fetchDataProTipsVideos()
        this.props.proTipsVideos.listProTipsVideos
    };

    render() {
        const { listProTipsVideos, refreshing, loading } = this.props.proTipsVideos
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={Platform.OS === 'android' ? "light-content" : "light-content"}
                    backgroundColor={Platform.OS === 'android' ? "#000" : "#6a51ae"}
                />
                <GoBackHeader
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
          // onEndReachedThreshold={0.5}
          // onEndReached={() =>this.fetchDataAdvertisements()}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          data={listProTipsVideos.length > 0 ? listProTipsVideos : null}
          keyExtractor={(item, index) => index.toString()}
          style={[styles.list,]}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.content_url)
                }}
                style={[, APPEARANCES.SHADOW, {
                  marginHorizontal: DIMENSION(3),
                  width: DIMENSION(94),
                  marginVertical: DIMENSION(0.5),
                  marginTop: 15,

                }]}>
                <View style={{
                  backgroundColor: '#FFF',
                  borderRadius: 3,
                  borderColor: '#FFF',
                  borderWidth: 0.2,
                }}>
                  <Image
                    resizeMode={'stretch'}
                    source={{ uri: item.image_headline }}
                    style={{ height: DIMENSION(50), width: null, flex: 1 }}
                  />
                  <View style={{ padding: 6.5, }}>
                    <Text style={{
                      fontSize: FONTFAMILY.titleText,
                      fontWeight: '500',
                      paddingTop: 10,
                    }}>
                      {item.title}
                    </Text>
                    <Text style={{
                      fontSize: FONTFAMILY.subTitleText,
                      paddingTop: 10,
                      paddingBottom: 10,
                      // fontWeight: '500'
                    }}>
                      {item.date}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

            )
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
        backgroundColor: '#FFF',
    },
});
export default translate("common")(ProTipsVideoScreen);
