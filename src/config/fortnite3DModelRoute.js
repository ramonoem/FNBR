import { createStackNavigator } from 'react-navigation';
import Fortnite3DModelScreen from '../screen/fortnite3DModel';
import DetailFortnite3DModelScreen from '../screen/fortnite3DModel/detail'

const color = "#373737";
const activeColor = "#F15C53";
const Fortnite3DModelRoute = createStackNavigator({

    Fortnite3DModelScreen: {
        screen: Fortnite3DModelScreen,
    },
    DetailFortnite3DModelScreen:{
        screen: DetailFortnite3DModelScreen
    },
},
{
    headerMode: 'none',
    removeClippedSubviews: true,
    //initialRouteName: "HomeScreen",
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
  })


export default Fortnite3DModelRoute;