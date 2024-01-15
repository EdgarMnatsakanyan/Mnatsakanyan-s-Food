import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import PasswordInput from '../UI/PasswordInputContainer/PasswordInput';


export default function SignUp ({navigation}) {
    const B = (props) => <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
    <Text style={{fontWeight: 'bold', fontSize: 15}}>{props.children}</Text>
    </TouchableOpacity>

const pressGoogleAccoutn = () => {
    return Linking.openURL('https://accounts.google.com/')
}

const pressFacebookAccount = () => {
    return Linking.openURL('https://www.facebook.com/')
}

    return (
      <View style={styles.Container}>
        <Image source={require('./assets/IconBrand.png')}/>
        <View style={styles.inputsContianer}>
            <TextInput style={styles.Inputs} placeholder='Email'/>
            <PasswordInput />
            <PasswordInput />
        </View>
        <TouchableOpacity style={styles.LoginBtnContainer}>
            <Text style={styles.LoginBtnText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.LineContainer}>
            <Text style={styles.Line}/>
            <Text style={styles.lineText}>OR</Text>
            <Text style={styles.Line}/>
        </View>
        <View style={styles.loginConatiner}>
            <TouchableOpacity style={styles.containerLoginWithWebSite} onPress={pressGoogleAccoutn}>
                <Image source={require('./assets/GoogleIcon.png')}/>
                <Text>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerLoginWithWebSite} onPress={pressFacebookAccount}>
                <Image source={require('./assets/FacebookIcon.png')}/>
                <Text>Login with FaceBook</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.underTextContainer}>
            <Text style={styles.underText}>Already have an account? <B>Log in</B></Text>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        top: 80,
        alignItems: 'center'
    },
    inputsContianer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 100,
        marginVertical: 10,
        fontSize: 18,
    },
    Inputs: {
        width: '80%',
        height: 55,
        borderWidth: 1.5,
        borderRadius: 100,
        marginVertical: 10,
        fontSize: 18,
        paddingLeft: 20
    },
    passwordInput: {
        width: '75%',
        fontSize: 18,
        top: 16,
        left: -18
    },
    icon: {
        top: -8,
        right: -120,
        zIndex: 1,
        width: 25,
        height: 30,
        backgroundColor: 'transparent'
    },
    LineContainer: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
        marginVertical: 20
    },
    Line: {
        width: '40%',
        height: 1,
        backgroundColor: '#000'
    },
    lineText: {
        fontSize: 20,
        fontWeight: '600'
    },
    forgetPassword: {
        fontSize: 18,
        fontWeight: '400'

    },
    LoginBtnContainer: {
        width: '80%',
        height: 50,
        backgroundColor: '#FBDE3F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginTop: 15
    },
    LoginBtnText: {
        fontSize: 17,
        fontWeight: '600'
    },
    loginConatiner: {
        width: '100%',
        alignItems: 'center',
        gap: 10
    },
    containerLoginWithWebSite: {
        width: '80%',
        height: 50,
        borderWidth: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
        borderRadius: 100,
        paddingLeft: 65
    },
    underTextContainer: {
        top: 60
    },
    underText: {
        fontSize: 16,
        fontWeight: '400'
    }
})