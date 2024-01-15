import { TextInput, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';


export default function PasswordInput () {
    const [password, setPassword] = useState(''); 
    const [showPassword, setShowPassword] = useState(false);


    const toggleShowPassword = (e) => {
        setShowPassword(!showPassword);
    };
    return (
        <View style={styles.inputContainer}>
        <TextInput
                    style={styles.passwordInput}
                    secureTextEntry={!showPassword} 
                    value={password} 
                    onChangeText={setPassword} 
                    placeholder="Enter Password"
                    placeholderTextColor="#aaa"
                />
                <FontAwesome 
                    name={showPassword ? 'eye-slash' : 'eye'} 
                    size={24} 
                    color="#7D7D7D"
                    style={styles.icon} 
                    onPress={toggleShowPassword} 
                />
    </View>
    )
}

const styles = StyleSheet.create({
    
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 100,
        marginVertical: 10,
        fontSize: 18,
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
})