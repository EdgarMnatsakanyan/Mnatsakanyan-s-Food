import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function DoneEmail ({navigation}) {
    const B = (props) => 
    <TouchableOpacity>
        <Text style={{fontWeight: '700', fontSize: 15, letterSpacing: 0.4, top: 2}}>{props.children}</Text>
    </TouchableOpacity>

    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="email-send-outline" size={45} color="black" />
        </View>
        <Text style={styles.title}>Check Email</Text>
        <Text style={styles.paragraph}>Please check your email to create a new Password</Text>
        <Text style={styles.resubmit}>Email not received? <B>Resubmit</B></Text>
        <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: -100
    },
    iconContainer: {
        backgroundColor: '#FBDE3F',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        paddingVertical: 20
    },
    paragraph: {
        fontSize: 13,
        fontWeight: '500',
        paddingTop: 20,
        paddingBottom: 50,
        width: '60%',
        textAlign: 'center'
    },
    resubmit: {
        fontSize: 15,
        fontWeight: '400',
    },
    btnContainer: {
        position: 'absolute',
        bottom: 50,
        width: '80%',
        height: 50,
        backgroundColor: '#FBDE3F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    btnText: {
        fontSize: 17,
        fontWeight: '700'
    }
})