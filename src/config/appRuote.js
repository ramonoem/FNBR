import {
    createStackNavigator,
    createAppContainer,
    StackActions, NavigationActions ,
    createBottomTabNavigator
} from 'react-navigation';
import DrawerRouting from './drawerRoute'
import AppRoute from './mainRoute'
import ChangeLanguageComponent from '../i18n/changeLanguage'

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'AppStack' })],
});
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
    ChangeLanguageComponent:{
      screen: ChangeLanguageComponent
    }
  }, { headerMode: 'none' } );
  const AppStacking  = createAppContainer(AppStack);
  console.log("porps", this.props)
  // const { nav } = this.props.nav
export default AppStacking ;