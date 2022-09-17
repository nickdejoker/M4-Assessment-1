import { Text, StyleSheet, View , SafeAreaView ,TextInput,TouchableOpacity , Button } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'

export default function Login ({navigation}) {
  return (
      <SafeAreaView>
        <View style={styles.foam}>
        <TextInput
        style={styles.input}
        placeholder="Email"
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        />
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={() =>navigation.navigate('Home')}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth:1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f0e68c",
    padding: 10,
    margin:10,
    borderRadius:122
  },
  foam: {
    margin :50,
    paddingTop:50
  }
});