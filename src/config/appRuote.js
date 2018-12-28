import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation';
import DrawerRouting from './drawerRoute'
import AppRoute from './mainRoute'


const AppStack = createStackNavigator({
  DrawerRouting: {
    screen: DrawerRouting,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
    AppRoute : {
      screen: AppRoute,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
  }, { headerMode: 'none' } );
  // class ChangeLanguageComponent extends Component
  const AppStacking  = createAppContainer(AppStack);
  console.log("porps", this.props)
  // const { nav } = this.props.nav
export default AppStacking ;