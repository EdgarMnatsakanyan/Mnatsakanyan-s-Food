import { Text, StyleSheet, View, Button, Image } from 'react-native'
import React from 'react'

export default function SecondScreen ({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.nextBtn} onPress={() => navigation.navigate('ThirdScreen')}>Skip</Text>
        <View style={styles.containerTitle}>
        <Image style={styles.ImageStyles} source={require('./assets/SecondPageImage.png')}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Fast Delivery</Text>
                <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur. Ut cras pellentesque diam mauris laoreet donec a eget aliquam. 
                </Text>
            </View>
            <Image style={styles.pageShower} source={require('./assets/SecondLoader.png')}/>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 50,
        width: '100%',
        textAlign: 'center',
    },
    nextBtn: {
        color: '#FBDE3F',
        fontSize: 20,
        position: 'absolute',
        right: 30
    },
    containerTitle: {
        top: 100,
        alignItems: 'center'
    },
    ImageStyles: {
        width: '70%',
        resizeMode: 'contain',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26,
        lineHeight: 39,
        fontWeight: '600'
    },
    paragraph: {
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    pageShower: {
        top: 80
    }
})