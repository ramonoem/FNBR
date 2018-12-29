import React, { Component } from "react";
import {
	View,
	TouchableOpacity,
	AsyncStorage,
	Image
} from "react-native";
import i18n from "./index";
import { StackActions, NavigationActions } from 'react-navigation';
import { translate } from "react-i18next";
import { DIMENSION, } from '../module';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Body } from 'native-base';
import { Left, Button } from "native-base";
import GoBackHeader from '../component/header/goBackHeader'

class ChangeLanguageComponent extends Component {

	constructor(props) {
		super(props)
		this.stat = {
			activeFlag: this.props.i18n.language
		}
	}
	// componentDidMount() {
    //     this.checkLanguageOrSwitch()
    //  }
    // checkLanguageOrSwitch  = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('@lang:code');
    //         if (value !== null){
    //           this.props.navigation.navigate("Home")
    //           console.log('value',value);
    //         }
    //       } catch (error) {
    //         // this.props.navigation.navigate("Change")
    //         console.log("err", error)
    //       }
    // }
	resetAction(){
		return resetAction = NavigationActions.reset({
			index: 1,
			actions: [
				NavigationActions.navigate({routeName: 'DrawerRouting'})
			]
		});
	}
	
	onSelectedLang(val) {
		this.props.navigation.goBack()
		AsyncStorage.setItem("@lang:code", val);
		i18n.changeLanguage(val);
	}
	_onClickGerman = () => {
		const { nav } = this.props
		this.onSelectedLang("german")
	}
	_onClickEnglish = () => {
		this.onSelectedLang("en")
	}
	render() {
		const { nav } = this.props
		return (
			<Container>
				<GoBackHeader
					titile={this.props.t('Language')}
					nav={this.props.navigation}
				/>
				<Content>
					<Button
						onPress={() => 
							// this.props.rootNavigation.dispatch(
							// 	NavigationActions.reset({
							// 	  index: 0,
							// 	  actions: [NavigationActions.navigate({ routeName: 'Login' })]
							// 	})
							//   )
							this.onSelectedLang("czech")
					}
						full style={{
							backgroundColor: '#FFF',
							padding: DIMENSION(15),
							justifyContent: 'center',
							borderBottomColor: '#EEE',
							borderBottomWidth: 2,
						}}>
						<Left >
							<Text style={{
								color: '#000',
							}}>Czech</Text>
						</Left>
						<Right style={{}}>
							<Image
								source={require("../assets/images/czech.png")}
								style={{ width: 30, height: 21 }}
							/>
						</Right>
					</Button>
					<Button
						onPress={() => this.onSelectedLang("german")}
						full style={{
							backgroundColor: '#FFF',
							padding: DIMENSION(15),
							justifyContent: 'center',
							borderBottomColor: '#EEE',
							borderBottomWidth: 2,
						}}>
						<Left>
							<Text style={{
								color: '#000'
							}}>German</Text>
						</Left>
						<Right style={{}}>
							<Image
								source={require("../assets/images/german.png")}
								style={{ width: 30, height: 21 }}
							/>
						</Right>
					</Button>
					<Button
						onPress={() => this.onSelectedLang("en")}
						full style={{
							backgroundColor: '#FFF',
							padding: DIMENSION(15),
							justifyContent: 'center',
							borderBottomColor: '#EEE',
							borderBottomWidth: 2,
						}}>
						<Left>
							<Text style={{
								color: '#000',
							}}>USA</Text>
						</Left>
						<Right style={{}}>

							<Image
								source={require("../assets/images/en.png")}
								style={{ width: 30, height: 21 }}
							/>
						</Right>
					</Button>

				</Content>
			</Container>
		);
	}
}
export default translate("common")(ChangeLanguageComponent);

