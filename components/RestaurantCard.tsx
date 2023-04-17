import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  name: string;
  onPress: (name: string) => void;
}

const RestaurantCard = ({name, onPress}: Props) => {
  return (
    <Pressable onPress={() => onPress(name)}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 16,
    marginTop: 8,
  },
});
