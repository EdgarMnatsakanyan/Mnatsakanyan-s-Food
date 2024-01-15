import { 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    View, 
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image
} from 'react-native'
import React, { useMemo, useState } from 'react'
import { 
    MaterialIcons, 
    Entypo, 
    MaterialCommunityIcons, 
    Ionicons,
    AntDesign
} from '@expo/vector-icons';

const scrollPictures = [
    {
        id: 1,
        uri: require("./assets/burger.png"),
        title: 'Burgers'
    },
    {
        id: 2,
        uri: require("./assets/pizza.png"),
        title: 'Pizza'
    },
    {
        id: 3,
        uri: require("./assets/meat.png"),
        title: 'Meat'
    },
    {
        id: 4,
        uri: require("./assets/Icecream.png"),
        title: 'Icecream'
    }
]


export default function HomePage () {


    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topTextContainer}>
            <View style={styles.iconContainer}>
            <Text style={styles.whoIsDeliver}>Deliver Now{'\n'}Madni Town</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </View>
            <TouchableOpacity style={styles.iconSection}>
                <View style={styles.briefCaseIconContainer}>
                <Entypo name="briefcase" size={22} style={styles.briefCaseIcon} />
                </View>
                <MaterialCommunityIcons name="human-dolly" size={22} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.searchInputContainer}>
            <Ionicons name="search-outline" size={26} color="black" />
            <TextInput 
                placeholder='Search Mnatsakanyan`s Food'
                style={styles.searchInput}
            />
            <View style={styles.lineSearch}/>
            <MaterialCommunityIcons style={styles.tuneIcon} name="tune-variant" size={26} color="black" />
        </View>
        <ScrollView style={styles.componentImage} horizontal={true}>
            <View style={styles.component}>
            {scrollPictures &&
                scrollPictures.map((type) => (
                    <View style={styles.titleAndImgSection} key={type.id}>
                        <View style={styles.imgContainer}>
                        <Image style={styles.image} source={type.uri}/>
                        </View>
                        <Text style={styles.scrollTitle}>{type.title}</Text>
                    </View>
                ))
            }
            </View>
        </ScrollView>
        <View style={styles.featurContainer}>
            <Text style={styles.featurTitle}>Featured on Mnatsakanyan's Food</Text>
            <TouchableOpacity style={styles.featurIconContainer}>
                <AntDesign name="arrowright" size={24} color="black"/>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>

        </ScrollView>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        left: 20
    },
    topTextContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'flex-end'
    },
    whoIsDeliver: {
        fontSize: 16
    },
    TownDeliver: {
        fontSize: 18,
        fontWeight: '600'
    },
    iconSection: {
        backgroundColor: '#e8e8e8',
        width: '25%',
        height: 40,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10
    },
    briefCaseIconContainer: {
        backgroundColor: '#000',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    briefCaseIcon: {
        color: '#fff',
    },
    searchInputContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#e8e8e8',
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 100,
        marginVertical: 20
    },
    lineSearch: {
        width: 2,
        height: 30,
        backgroundColor: '#00000042',
        position: 'absolute',
        right: 50
    },
    searchInput: {
        width: '70%',
        left: 20
    },
    tuneIcon: {
        position: 'absolute',
        right: 16
    },
    titleAndImgSection: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
    },
    component: {
        width: '100%',
        height: 100,
        gap: 25,
        flexDirection: 'row',
        paddingHorizontal: 8,
    },
    imgContainer: {
        backgroundColor: '#fff',
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    image: {
        width: 70,
        height: 70
    },
    scrollTitle: {
        fontSize: 15,
        paddingTop: 10,
        fontWeight: '400'
    },
    featurContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'center',
        position: 'absolute',
        top: 300,
        gap: 50
    },
    featurTitle: {
        fontSize: 17,
        fontWeight: '600',
        top: 6
    },
    featurIconContainer: {
        backgroundColor: '#E0E0E0',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})