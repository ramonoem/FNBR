import React, { Component } from 'react';
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import i18n from "i18next";
import HomeScreen from '../screen/news/home';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import UpComingScreen from '../screen/upComing/';
import DailyShopScreen from '../screen/dailyShop/';
import ChanllengeScreen from '../screen/challenge/';
// import DrawerRouting from '../config/drawerRoute';
// import DrawerComponent from './drawerComponent/'

const color = "#373737";
const activeColor = "#582D79";
const RootStack = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        // const: { id : 1} = HomeScreen,
        navigationOptions: ({}) => {
            const title = i18n.t('News');
            const tabBarIcon = ({ focused }) =>
            focused ? (
                <FontAwesome5
                    name="globe-americas"
                    size={24}
                    iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                    color={activeColor}
                />
            ) : (
                    <FontAwesome5
                        name="globe-americas"
                        size={24}
                        iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                        color={color}
                    />
                )
            return {title, tabBarIcon};
          },
    },
    UpComingScreen:{
        screen: UpComingScreen,
        navigationOptions: {
            title: "Upcoming",
            tabBarIcon: ({ focused }) =>
                focused ? (
                    <MaterialCommunityIcons
                        name="alarm-light"
                        size={30}
                        iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                        color={activeColor}
                    />
                ) : (
                        <MaterialCommunityIcons
                            name="alarm-light"
                            size={30}
                            iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                            color={color}
                        />
                    )
        }
    }, 
    DailyShopScreen:{
        screen: DailyShopScreen,
        navigationOptions: {
            title: "Daily Shop",
            tabBarIcon: ({ focused }) =>
                focused ? (
                    <SimpleLineIcons
                        name="handbag"
                        size={25}
                        iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                        color={activeColor}
                    />
                ) : (
                        <SimpleLineIcons
                            name="handbag"
                            size={25}
                            iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                            color={color}
                        />
                    )
        }
    },
    ChanllengeScreen:{
        screen: ChanllengeScreen,
        navigationOptions: {
            title: "Chanllenge",
            tabBarIcon: ({ focused }) =>
                focused ? (
                    <MaterialCommunityIcons
                        name="alarm-light"
                        size={30}
                        iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                        color={activeColor}
                    />
                ) : (
                        <MaterialCommunityIcons
                            name="alarm-light"
                            size={30}
                            iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                            color={color}
                        />
                    )
        }
    },
},
    {
        removeClippedSubviews: true,
        tabBarPosition: "bottom",
        animationEnabled: true,
        activeTintColor: activeColor,
        inActiveTintColor: color,
        lazy: true,
        tabBarOptions: {
            swipeEnabled: true,
            showLabel: true,
            showIcon: true,
            labelStyle: {
                fontSize: 12,
                fontWeight: '300'
            },
            activeTintColor: activeColor,
            style: {
                elevation: 0,
                borderTopWidth: 1,
                borderTopColor: '#F0F0F5',
                backgroundColor: '#fff',
                paddingTop: 5,
            },
            indicatorStyle: {
                backgroundColor: '#fff',
            },
        },
    });

// const AppRoute = createAppContainer(RootStack);

export default RootStack ;
// translate("common")(