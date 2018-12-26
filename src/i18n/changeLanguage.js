import React, { Component } from "react";
import {
	View,
	TouchableOpacity,
	AsyncStorage,
	Image
} from "react-native";
import i18n from "./index";
import { translate } from "react-i18next";
import { DIMENSION, } from '../module';

class ChangeLanguageComponent extends Component {

	constructor(props) {
		super(props)
		this.stat = {
			activeFlag: this.props.i18n.language
		}
	}


	onSelectedLang(val) {
		AsyncStorage.setItem("@lang:code", val);
		i18n.changeLanguage(val);
	}
	_onClick = () => {
		const { nav } = this.props
		// this.onSelectedLang("kh")
		// nav.navigate("Home")
	}
	render() {
		const { nav } = this.props
		return (
			<View style={{ height: 20 }}>
				<View style={{ flexDirection: "row", left: 0, marginLeft: DIMENSION(0), width: DIMENSION(20) }}>
					{
						this.stat.activeFlag === this.props.i18n.language ?
							<TouchableOpacity
								style={{
									// ?paddingLeft: 8,
									// justifyContent: "center",
									// alignItems: "center"
								}}
								onPress={() => this.onSelectedLang("kh")}
							>
								<Image
									source={require("../assets/images/kh.png")}
									style={{ width: 30, height: 21 }}
								/>
							</TouchableOpacity> 
							:
							<TouchableOpacity
								style={{
									// paddingLeft: 8,
									// justifyContent: "center",
									// alignItems: "center"
								}}
								onPress={() => this.onSelectedLang("en")}
							>
								<Image
									source={require("../assets/images/en.png")}
									style={{ width: 30, height: 21 }}
								/>
							</TouchableOpacity>

					}
				</View>
			</View>
		);
	}
}

