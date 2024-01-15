import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function WelcomePage ({navigation}) {
  const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    return (
      <View style={styles.container}>
        <Image style={styles.ImageSection} source={require('./assets/RegistrationFirsPageIcon.png')}/>
        <Text style={styles.title}>Welcome to Mnatsakanyan's Food</Text>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugiat!</Text>
        <TouchableOpacity style={styles.createBtnContainer} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.createBtnTitle}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginBtnContainer} onPress={() => navigation.navigate('LoginPage')}>
          <Text style={styles.LoginBtnTitle}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.underTitle}>
            By <B>Registering</B> or <B>Login</B> you have agreed to these
            <B>Terms and Conditions.</B>
        </Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        top: 50
    },
    ImageSection: {
        resizeMode: 'contain',
        width: '70%',
        marginVertical: 20
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        width: '70%',
        marginBottom: 20
    },
    paragraph: {
      fontSize: 13,
      textAlign: 'center',
      fontWeight: '400',
      lineHeight: 20,
      marginBottom: 10
    },
    createBtnContainer: {
      width: '85%',
      height: 50,
      backgroundColor: '#FBDE3F',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10
    },
    createBtnTitle: {
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 25
    },
    LoginBtnContainer: {
      borderWidth: 2,
      width: '85%',
      height: 50,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10
    },
    LoginBtnTitle: {
      fontSize: 17,
      fontWeight: '600',
      lineHeight: 25
    },
    underTitle: {
      fontSize: 13,
      width: '70%',
      textAlign: 'center',
      marginTop: 20
    }
})