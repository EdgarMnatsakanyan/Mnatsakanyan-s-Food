import { Text, StyleSheet, View, Button, Image } from 'react-native'
import React from 'react'

export default function FirstScreen ({navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.nextBtn} onPress={() => navigation.navigate('HomePage')}>Skip</Text>
        <View style={styles.containerTitle}>
        <Image style={styles.ImageStyles} source={require('./assets/FirstPageIcon.png')}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Trending Foods</Text>
                <Text style={styles.paragraph}>
                    The popularity of plant-based diets and alternative protein sources, such as Beyond Meat and Impossible Foods, continued to rise.
                </Text>
            </View>
            <Image style={styles.pageShower} source={require('./assets/PageLoader.png')}/>
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