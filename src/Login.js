import { Text, StyleSheet, View , SafeAreaView ,TextInput,TouchableOpacity , ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from "@expo/vector-icons";

export default function Login ({navigation}) {
  return (
    <ImageBackground  source={require('../assets/south.jpg')} blurRadius={15} resizeMode="cover" style={styles.image}>
      <SafeAreaView>
        <View>
        <Text style={styles.textH}>Welcome Innocent Bystanders</Text>
        </View>
        <View style={styles.foam}>
        <TextInput
        style={styles.input}
        style={styles.textI}
        placeholderTextColor="black"
        placeholder="Email"
        />
        <TextInput
        style={styles.input}
        style={styles.textI}
        placeholderTextColor="black"
        placeholder='Password'
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Onboard')}>
      <Text style={styles.textB}>
      Login
      </Text>
      </TouchableOpacity>
      <View>
      <Text >Don't Have an account?</Text>
      <Text style={{color:'blue'}} onPress={()=> navigation.navigate('SignUp')}>SignUp </Text>
      </View>
      </SafeAreaView>
      </ImageBackground>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },  
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth:1,
    padding: 10,
    color: "red"
    
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
  },
  textH: {
    color: "#9932cc",
    fontSize: 35,
    fontWeight: "bold",
    marginLeft:15,
    fontStyle:'italic',
  
  },
  textI: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",

  },
  textB: {
   
    fontSize: 30,
    fontWeight: "bold",
    marginLeft:15,

  },
});