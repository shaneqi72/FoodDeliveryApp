import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RestaurantCard from '../components/RestaurantCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../AppTabNavigator';

type Props = NativeStackScreenProps<RootStackParams, 'ExploreStack'>;

const ExploreScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants</Text>
      <View>
        <Text style={styles.sectionTitle}>Restaurants Near You</Text>
        <RestaurantCard
          name="Sushi Restaurant"
          onPress={name => navigation.navigate('Restaurant', {name})}
          // it can navigate to the restaurantsStack page
          // onPress={() =>
          //   navigation.navigate('RestaurantsStack', {
          //     screen: 'Restaurant',
          //     params: {name: 'Hello from explore screen'},
          //   })
          // }
        />
        <RestaurantCard
          name="Burger Restaurant"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
        <RestaurantCard
          name="Fine dining Restaurant"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />

        <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
        <RestaurantCard
          name="Sushi Restaurant"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
        <RestaurantCard
          name="Burger Restaurant"
          onPress={name => navigation.navigate('Restaurant', {name})}
        />
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: '#efefef',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
