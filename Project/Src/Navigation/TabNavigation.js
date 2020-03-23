import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Pipeline from 'Src/Containers/TabScreens/PipeLine/Pipeline';
import Clients from 'Src/Containers/TabScreens/Clients/Clients';
import Deal from 'Src/Containers/TabScreens/Deals/Deals';
import Profile from 'Src/Containers/TabScreens/Profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLOR from 'Src/Theme/Colors';
import NavKey from 'Src/Constants/NavigationKey';
import IconsKey from 'Src/Constants/Icon';

const TabNavigator = createBottomTabNavigator(
  {
    Pipeline: {
      screen: Pipeline,
      navigationOptions: {
        tabBarLabel: NavKey.PIPELINE,
        tabBarIcon: ({tintColor}) => (
          <Icon name={IconsKey.HOME} color={tintColor} size={25} />
        ),
      },
    },
    Clients: {
      screen: Clients,
      navigationOptions: {
        tabBarLabel: NavKey.CLIENTS,
        tabBarIcon: ({tintColor}) => (
          <Icon name={IconsKey.USERS} color={tintColor} size={25} />
        ),
      },
    },
    Deals: {
      screen: Deal,
      navigationOptions: {
        tabBarLabel: NavKey.DEALS,
        tabBarIcon: ({tintColor}) => (
          <Icon name={IconsKey.BRIEFCASE} color={tintColor} size={25} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: NavKey.PROFILE,
        tabBarIcon: ({tintColor}) => (
          <Icon name={IconsKey.USER} color={tintColor} size={25} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: COLOR.LogPageColor,
      activeTintColor: COLOR.white,
      inactiveTintColor: COLOR.LogPageColor,
    },
  },
  {
    initialRouteName: NavKey.PROFILE,
  },
);

export default createAppContainer(TabNavigator);
