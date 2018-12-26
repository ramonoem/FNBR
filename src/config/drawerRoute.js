import React from 'react'
import  { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import FortniteTweetScreen from '../screen/fortniteTweet';
import Fortnite3DModelScreen from '../screen/fortnite3DModel';
import DetailFortnite3DModelScreen from '../screen/fortnite3DModel/detail'
import ProTipsVideoScreen from '../screen/proTipsVideo';
import DrawerComponent from './drawerComponent';
import AppRoute from './mainRoute';
import DetailFortniteTweet from '../screen/fortniteTweet/detail';
import EmoteSoundScreen from '../screen/emoteSound/index';
import ShareThisApp from '../screen/shareThisApp';
import SubscribeUs from '../screen/subscribeUs';
import HelpUsTranslate from '../screen/helpUsTranslate';
import FAQs from '../screen/FAQs';




const DEVICE_WIDTH = Dimensions.get('window').width;
const color = "#373737";
const activeColor = "#F15C53";
const DrawerRoute = createDrawerNavigator({
    AppRoute: {
        screen: AppRoute
    },
    Fortnite3DModelScreen: {
        screen: Fortnite3DModelScreen,
    },
    DetailFortnite3DModelScreen:{
        screen: DetailFortnite3DModelScreen
    },
    FortniteTweetScreen: {
        screen: FortniteTweetScreen
    },
    DetailFortniteTweet:{
        screen: DetailFortniteTweet
    },
    ProTipsVideoScreen: {
        screen: ProTipsVideoScreen
    },
    EmoteSoundScreen:{
        screen: EmoteSoundScreen
    },
    ShareThisApp:{
        screen: ShareThisApp
    },
    SubscribeUs:{
        screen: SubscribeUs
    },
    HelpUsTranslate:{
        screen: HelpUsTranslate
    },
    FAQs:{
        screen: FAQs
    }
},
    {
        contentComponent: DrawerComponent,
        drawerWidth: DEVICE_WIDTH - 100,
        removeClippedSubviews: true,
        animationEnabled: true,
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
    }
)
const DrawerRouting = createAppContainer(DrawerRoute);

export default DrawerRouting;