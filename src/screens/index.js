import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// FEATURE SCREEN
import ListComponents from './ListComponents';
import ButtonCompScreen from './compFeatures/ButtonCompScreen';
import CardCompScreen from './compFeatures/CardCompScreen';
import LoadingScreenCompScreen from './compFeatures/ScreenComponent/LoadingScreenCompScreen';
import EmptyScreenCompScreen from './compFeatures/ScreenComponent/EmptyScreenCompScreen';
import DetailListCompScreen from './compFeatures/DetailComponent/DetailListCompScreen';
import DetailCompScreen from './compFeatures/DetailComponent/DetailCompScreen';
import FormScreen from './compFeatures/FormComponent/FormScreen';
import IconsScreen from './compFeatures/IconsScreen';
import ListingCompScreen from './compFeatures/ListComponent/ListingCompScreen';
import ListsCardV1Screen from './compFeatures/ListComponent/ListsCardV1Screen';
import ListsCardV2Screen from './compFeatures/ListComponent/ListsCardV2Screen';
import LoadingCompScreen from './compFeatures/LoadingCompScreen';
import ScreenListCompScreen from './compFeatures/ScreenComponent/ScreenListCompScreen';
import TypographyCompScreen from './compFeatures/TypographyCompScreen';

// MISC SCREEN
import {COLORS} from '../theme';

const tabIconConf = (navigation, focused, tintColor) => {
  const {routeName} = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Movie') {
    iconName = `home`;
    // We want to add badges to home tab icon
    iconName = 'columns';
  } else if (routeName === 'Component') {
    iconName = `question-circle${focused ? '' : '-o'}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

// setting screen w tabbar
const outerScreenConf = ({navigation}) => ({
  header: null,
});
// setting screen wo tabbar
const innerScreenConf = ({navigation}) => ({
  header: null,
  tabBarVisible: false,
});

const ComponentNavigation = createStackNavigator({
  ListComponents: {
    screen: ListComponents,
    navigationOptions: outerScreenConf,
  },
  ButtonCompScreen: {
    screen: ButtonCompScreen,
    navigationOptions: innerScreenConf,
  },
  CardCompScreen: {
    screen: CardCompScreen,
    navigationOptions: innerScreenConf,
  },
  ScreenListCompScreen: {
    screen: ScreenListCompScreen,
    navigationOptions: innerScreenConf,
  },
  EmptyScreenCompScreen: {
    screen: EmptyScreenCompScreen,
    navigationOptions: innerScreenConf,
  },
  LoadingScreenCompScreen: {
    screen: LoadingScreenCompScreen,
    navigationOptions: innerScreenConf,
  },
  DetailListCompScreen: {
    screen: DetailListCompScreen,
    navigationOptions: innerScreenConf,
  },
  DetailCompScreen: {
    screen: DetailCompScreen,
    navigationOptions: innerScreenConf,
  },
  FormScreen: {
    screen: FormScreen,
    navigationOptions: innerScreenConf,
  },
  IconsScreen: {
    screen: IconsScreen,
    navigationOptions: innerScreenConf,
  },
  ListingCompScreen: {
    screen: ListingCompScreen,
    navigationOptions: innerScreenConf,
  },
  ListsCardV1Screen: {
    screen: ListsCardV1Screen,
    navigationOptions: innerScreenConf,
  },
  ListsCardV2Screen: {
    screen: ListsCardV2Screen,
    navigationOptions: innerScreenConf,
  },
  LoadingCompScreen: {
    screen: LoadingCompScreen,
    navigationOptions: innerScreenConf,
  },
  TypographyCompScreen: {
    screen: TypographyCompScreen,
    navigationOptions: innerScreenConf,
  },
});

ComponentNavigation.navigationOptions = ({navigation}) => {
  let tabBarVisible = false;
  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == 'ListComponents') {
    tabBarVisible = true;
  }

  return {
    tabBarVisible,
  };
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Component: ComponentNavigation,
    },
    {
      initialRouteName: 'Component',
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) =>
          tabIconConf(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.gray,
        style: {
          backgroundColor: COLORS.cardBackground,
          borderTopWidth: 1,
          // paddingVertical: 5,
          // height: 55,
        },
      },
    },
  ),
);
