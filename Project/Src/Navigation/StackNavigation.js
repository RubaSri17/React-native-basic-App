/* eslint-disable no-undef */
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from 'Src/Navigation/TabNavigation';
import Login from 'Src/Containers/Login/Login';
import SignUp from 'Src/Containers/SignUp/SignUp';
import Splash from 'Src/Containers/Splash/splash';
import TradeOrder from 'Src/Containers/TabScreens/TradeOrder/TradeOrder';
import NavKey from 'Src/Constants/NavigationKey';

const stack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },

    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    TradeOrder: {
      screen: TradeOrder,
    },
  },
  {
    initialRouteName: NavKey.SPLASH,
  },
);

export default (AppContainer = createAppContainer(stack));
