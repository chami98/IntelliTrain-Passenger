import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Home = ({ route }) => {

    const { data } = route.params;
    return (

        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.appName}>IntelliTrain</Text>
                <Text style={styles.slogan}>Taking your railway experience to the next level</Text>
                <Image
                    source={require('../assets/railway.png')}
                    style={styles.image}
                    resizeMode="contain"
                /><Text style={styles.greeting}>Welcome, {data.firstName}!</Text>
            </View>
        </View>
    );
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
    },
    image: {
        width: '90%',
        height: undefined,
        aspectRatio: 1.5,
        marginBottom: 24,
    },
    textContainer: {
        alignItems: 'center',
    },
    appName: {
        fontSize: 38,
        fontWeight: 'bold',
        marginBottom: -2,
        color: '#3969b7'
    },
    slogan: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 16,
        fontStyle: 'italic',
    },
    greeting: {
        fontSize: 22,
        backgroundColor: '#2ecc71',
        borderWidth: 1,
        borderColor: '#2ecc71',
        borderRadius: 30,
        padding: 15,
        color: 'white',
        fontWeight: 'bold',

    },
});
