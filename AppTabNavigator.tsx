import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';
import RestaurantScreen from './screens/Restaurant';
import RestaurantsScreen from './screens/Restaurants';
import SignupScreen from './screens/Signup';

export type RootStackParams = {
  AurhStack: undefined;
  Explore: undefined;
  Profile: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  ExploreStack: ExploreStackParams;
  Restaurant: {
    name: string;
  };
};

// const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStack = createBottomTabNavigator<RootStackParams>();

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

export type AuthStackParams = {
  Login: undefined;
  Signup: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const App = () => {
  const renderContent = () => {
    const isLoggedIn = true;

    if (isLoggedIn) {
      return (
        <RootStack.Navigator
          initialRouteName="ExploreStack"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#e67a15',
            tabBarInactiveTintColor: 'gray',
          }}>
          <RootStack.Screen
            name="ExploreStack"
            component={ExploreScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <ExploreIcon color={color} size={size} />
              ),
              tabBarLabel: 'Explore',
            }}
          />
          <RootStack.Screen
            name="RestaurantsStack"
            component={RestaurantScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <RestaurantIcon color={color} size={size} />
              ),
              tabBarLabel: 'Restaurant',
            }}
          />
          <RootStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <ProfileIcon color={color} size={size} />
              ),
              tabBarLabel: 'Profile',
            }}
          />
        </RootStack.Navigator>
      );
    }

    return <AuthScreenStack />;
  };
  return (
    <NavigationContainer>
      {/* <RootStack.Screen
          name="ExploreStack"
          component={ExploreScreenStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <ExploreIcon color={color} size={size} />
            ),
            tabBarLabel: 'Explore',
          }}
        />
        <RootStack.Screen
          name="RestaurantsStack"
          component={RestaurantScreenStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <RestaurantIcon color={color} size={size} />
            ),
            tabBarLabel: 'Restaurant',
          }}
        />
        <RootStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <ProfileIcon color={color} size={size} />
            ),
            tabBarLabel: 'Profile',
          }}
        />
        <RootStack.Screen name="Restaurant" component={RestaurantScreen} /> */}
      {renderContent()}
    </NavigationContainer>
  );
};

export default App;
