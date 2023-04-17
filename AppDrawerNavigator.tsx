import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ExploreIcon from './icons/ExploreIcon';
import ProfileIcon from './icons/ProfileIcon';
import RestaurantIcon from './icons/RestaurantIcon';

import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import RestaurantScreen from './screens/Restaurant';
import RestaurantsScreen from './screens/Restaurants';

export type RootStackParams = {
  Explore: undefined;
  Profile: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  ExploreStack: ExploreStackParams;
  Restaurant: {
    name: string;
  };
};

// const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStack = createDrawerNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{headerShown: false}}>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
      }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="ExploreStack"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: '#e67a15',
          drawerInactiveTintColor: 'gray',
        }}>
        <RootStack.Screen
          name="ExploreStack"
          component={ExploreScreenStack}
          options={{
            drawerIcon: ({color, size}) => (
              <ExploreIcon color={color} size={size} />
            ),
            drawerLabel: 'Explore',
          }}
        />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
          options={{
            drawerIcon: ({color, size}) => (
              <RestaurantIcon color={color} size={size} />
            ),
            drawerLabel: 'Restaurant',
          }}
        />
        <RootStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
            drawerLabel: 'Profile',
          }}
        />
        {/* <RootStack.Screen name="Restaurant" component={RestaurantScreen} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
