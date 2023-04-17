import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ProfileIcon from '../icons/ProfileIcon';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../AppTabNavigator';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  return (
    <View>
      <Text>LoginScreen</Text>
      <TouchableHighlight onPress={() => navigation.navigate('Signup')}>
        <ProfileIcon color="#333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
