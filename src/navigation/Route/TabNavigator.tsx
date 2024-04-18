import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen';
import AddStackNavigator from './AddStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Route, RenderIconProps } from '../../types';

const TabNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home-outline', color: '#3F51B5' },
    { key: 'search', title: 'Search', icon: 'magnify', color: '#009688' },
    { key: 'add', title: 'Add', icon: 'plus-box-outline', color: '#795548' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    search: SearchScreen,
    add: AddStackNavigator,
  });

  const renderIcon = ({ route, focused, color }: RenderIconProps) => (
    <MaterialCommunityIcons
      name={focused ? route.icon.replace('-outline', '') : route.icon}
      color={color}
      size={26}
    />
  );

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={renderIcon}
    />
  );
};

export default TabNavigator;
