import {ScrollView, View, StyleSheet, Text} from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../AppTabNavigator';

type Props = NativeStackScreenProps<RootStackParams, 'RestaurantsStack'>;

const RestaurantsScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants Screen</Text>
      <ScrollView>
        <RestaurantCard
          name="Sushi Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Burger Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
        <RestaurantCard
          name="Fine dining Restaurant"
          onPress={name => {
            navigation.navigate('Restaurant', {name});
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default RestaurantsScreen;
