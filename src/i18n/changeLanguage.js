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
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import { Left, Button } from "native-base";
import GoBackHeader from '../component/header/goBackHeader'

class ChangeLanguageComponent extends Component {

	constructor(props) {
		super(props)
		this.stat = {
			activeFlag: this.props.i18n.language
		}
	}


	onSelectedLang(val) {
		const resetAction = StackActions.reset({
			// index: 0,
			actions: [NavigationActions.navigate({ routeName: 'AppRoute' })],
		});
		this.props.navigation.dispatch(resetAction);
		AsyncStorage.setItem("@lang:code", val);
		i18n.changeLanguage(val);
		
	}
	_onClickGerman = () => {
		const { nav } = this.props
		this.onSelectedLang("german")
		// nav.navigate("Home")
	}
	_onClickEnglish = () => {
		// const { nav } = this.props
		this.onSelectedLang("en")
		// nav.navigate("Home")
	}
	render() {
		const { nav } = this.props
		console.log('props:', this.props)
		return (
			<Container>
				<GoBackHeader
					titile={this.props.t('Language')}
					nav={this.props.navigation}
				/>
				<Content>
					<Button
						onPress={() => this.onSelectedLang("czech")}
						full style={{
							backgroundColor: '#FFF',
							padding: DIMENSION(30),
							justifyContent: 'center'
						}}>
						<Left>
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
							padding: DIMENSION(30),
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
							padding: DIMENSION(30),
							justifyContent: 'center'
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

