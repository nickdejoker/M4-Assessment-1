import React from 'react';
import { View, Text , StyleSheet , TouchableOpacity , ImageBackground, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export default function  SignUp({ navigation }) {
    return (
        <View style={styles.container}>
    <ImageBackground  source={require('../assets/ashi.jpeg')} blurRadius={15} resizeMode="cover" style={styles.image}>
    <Text style={styles.textH}>Lets Get Started</Text>
    <Text style={{color:'white' , textAlign:'center'}}>Create your Innocent Bystanders account</Text>
    <TextInput
      style={styles.input}
        placeholderTextColor="white"
        placeholder="Name"
        />
         <TextInput
      style={styles.input}
        placeholderTextColor="white"
        placeholder="Surname"
        />
    <TextInput
      style={styles.input}
        placeholderTextColor="white"
        placeholder="Email"
        />
        <TextInput
        style={styles.input}
        placeholderTextColor="white"
        placeholder='Password'
        />
      <TextInput
        style={styles.input}
        placeholderTextColor="white"
        placeholder='Confirm Password'
        />
       <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
      <Text style={styles.textB}>
      Create
      </Text>
      </TouchableOpacity>
    
        </ImageBackground>
        </View>
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
            textH: {
              color: "#9932cc",
              fontSize: 50,
              fontWeight: "bold",
              textAlign:'center'
            },
            input: {
                height: 40,
                margin: 12,
                borderBottomWidth:1,
                padding: 10,
                color: "red"
                
                
              },
              textB: {
                fontSize: 30,
                fontWeight: "bold",
                marginLeft:15,
                color:'blue'
            
              },
              button: {
                alignItems: "center",
                backgroundColor: "#f0e68c",
                padding: 10,
                margin:10,
                borderRadius:122
                
              },
            });
    