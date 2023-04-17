import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>ProfileScreen</Text>

      <Text>Name: Foo Bar</Text>

      <Pressable>
        <Text>Edit Profile</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

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
