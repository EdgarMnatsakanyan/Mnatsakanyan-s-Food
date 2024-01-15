import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'
import PasswordInput from '../UI/PasswordInputContainer/PasswordInput'

export default function ChangePassword ({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.containerIn}>
        <Text style={styles.title}>Resent your password</Text>
        <Text style={styles.paragraph}>Enter your password below</Text>
        <PasswordInput />
        <PasswordInput />
        </View>

        <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate('UpdatePasswordDone')}>
          <Text style={styles.btnText}>Resent Password</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  containerIn: {
    width: '100%',
    alignItems: 'flex-start',
    top: 100,
    left: 35
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    paddingVertical: 20
  },
  paragraph: {
    fontSize: 15,
    fontWeight: '500',
    paddingBottom: 100
  },
  btnContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#FBDE3F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 100
  },
  btnText: {
    fontSize: 17,
    fontWeight: '600',
  }
})