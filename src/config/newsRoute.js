import { createStackNavigator } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from '../screen/news/home';


const color = "#373737";
const activeColor = "#F15C53";
const HomeNavigator = createStackNavigator({

    HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
        title: "HomeScreen",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Ionicons
              name="ios-home"
              size={24}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
              <Ionicons
                name="ios-home-outline"
                size={24}
                iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
                color={color}
              />
            )
      }
   
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
  }
)


export default HomeNavigator;