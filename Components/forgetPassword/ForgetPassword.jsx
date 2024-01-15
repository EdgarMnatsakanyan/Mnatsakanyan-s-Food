import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function ForgetPassword ({navigation}) {
    const B = (props) => 
    <TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 13}}>{props.children}</Text>
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
            navigation.navigate('DoneEmail')
        }
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Resent your password</Text>
        <Text style={styles.paragraph}>Enter your registered email below</Text>
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
        <View style={styles.remeberContainer}>
            <Text style={styles.remeberPass}>Remember the password? <B>Login</B></Text>
        </View>
        <TouchableOpacity style={styles.btnSubmit} onPress={handleButtonPress}>
            <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '90%',
        top: 200,
        gap: 30
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20
    },
    paragraph: {
        fontSize: 13,
        fontWeight: '400',
        left: -18,
        top: -35
    },
    inputContainer: {
        width: '90%',
        height: 50,
        borderWidth: 1.5,
        borderRadius: 100,
        paddingHorizontal: 40,
        justifyContent: 'center',
        left: 20
    },
    input: {
        fontSize: 17
    },
    btnSubmit: {
        width: '90%',
        height: 50,
        backgroundColor: '#FBDE3F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        left: 20,
        top: 180
    },
    btnText: {
        fontSize: 18,
        fontWeight: '600'
    },
    remeberPass: {
        fontSize: 15,
        alignItems: 'center'
    },
    remeberContainer: {
        alignItems: 'center'
    },
    errorText: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: '#f0f0f0',
        top: -12,
        left: 40,
        fontSize: 17,
        color: 'red'
    }
})