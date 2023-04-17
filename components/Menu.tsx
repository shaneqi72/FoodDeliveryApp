import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../AppTabNavigator';

const Menu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <Pressable
        onPress={() => {
          // go to expolore
          navigation.navigate('Explore');
        }}>
        <Text style={styles.link}>Explore</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          // go to restaurants
          navigation.navigate('Restaurants');
        }}>
        <Text style={styles.link}>Restaurants</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          // go to profile
          navigation.navigate('Profile');
        }}>
        <Text style={styles.link}>Profile</Text>
      </Pressable>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
});
