import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function UpdatePasswordDone ({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="shield-check-outline" size={40} color="black" />
        </View>
        <Text style={styles.title}>Password updated</Text>
        <Text style={styles.paragraph}>Congratulation your password has been updated</Text>
        <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top: 150
    },
    iconContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#FBDE3F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        paddingVertical: 20
    },
    paragraph: {
        fontSize: 15,
        width: '60%',
        textAlign: 'center',
        lineHeight: 25,
        fontWeight: '500'
    },
    btnContainer: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBDE3F',
        borderRadius: 100,
        position: 'absolute',
        bottom: 250
    },
    btnText: {
        fontSize: 17,
        fontWeight: '600',
    }
})