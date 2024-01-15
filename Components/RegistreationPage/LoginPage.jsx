import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import PasswordInput from '../UI/PasswordInputContainer/PasswordInput';


export default function LoginPage ({navigation}) {
    const B = (props) => <TouchableOpacity onPress={() => navigation.navigate('SignUp')}> 
    <Text style={{fontWeight: 'bold', fontSize: 15, top: 2}}>{props.children}</Text>
    </TouchableOpacity>
    const [Email, setEmali] = useState('')
    const [emailValidError, setEmailValidError] = useState('');

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (val.length === 0) {
            setEmailValidError('email addres must be enter')
        } else if (reg.test(val) === false) {
            setEmailValidError('enter valid email addres')
        } else if (reg.test(val) === true) {
            setEmailValidError('')
        }
    }

    const handleButtonPress = () => {
        handleValidEmail(Email);

        if (emailValidError === '') {
            navigation.navigate('HomePage')
        }
    }

    const pressGoogleAccoutn = () => {
        return Linking.openURL('https://accounts.google.com/')
    }

    const pressFacebookAccount = () => {
        return Linking.openURL('https://www.facebook.com/')
    }

    return (
      <View style={styles.container}>
        <Image source={require('./assets/IconBrand.png')}/>
        <View style={styles.inputContainer}>
        {emailValidError ? <Text style={styles.errorText}>{emailValidError}</Text> : null}
        <TextInput 
            style={styles.input}
            placeholder='Email'
            value={Email}
            autoCorrect={false}
            autoCapitalize="none"
            onBlur={() => handleValidEmail(Email)}
            onChangeText={value => {
                setEmali(value);
                handleValidEmail(value)
            }}
            />
        </View>
        <PasswordInput />
        <TouchableOpacity style={styles.fogetContainer} onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgetPassword}>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginBtnContainer} onPress={handleButtonPress}>
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
            <Text style={styles.underText}>Don't have an account? <B >Sign up</B></Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        top: 80,
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        height: 50,
        borderWidth: 1.5,
        borderRadius: 100,
        paddingHorizontal: 40,
        justifyContent: 'center',
        marginTop: 20
    },
    input: {
        fontSize: 17
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
        marginVertical: 30
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
    fogetContainer: {
        width: '80%',
        alignItems: 'flex-end',
        marginVertical: 20
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
        borderRadius: 100
    },
    LoginBtnText: {
        fontSize: 17,
        fontWeight: '600'
    },
    loginConatiner: {
        width: '100%',
        alignItems: 'center',
        gap: 20
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
        top: 80
    },
    errorText: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: '#f0f0f0',
        top: -12,
        left: 40,
        fontSize: 17,
        color: 'red'
    },
    underText: {
        fontSize: 16,
        fontWeight: '400'
    }
})