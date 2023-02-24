import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ route }) => {

    const { data } = route.params;
    return (

        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.appName}>IntelliTrain</Text>
                <Text style={styles.slogan}>Taking your railway experience to the next level</Text>
                <Text style={styles.greeting}>Welcome, {data.firstName}!</Text>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="timer-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Time Table</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="train-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Track Train</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="newspaper-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="pulse-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Live Updates</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="chatbubbles-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Send News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="help-buoy-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Lost and Found</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Home;


const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
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
        fontSize: 20,
        // backgroundColor: '#2ecc71',
        // borderWidth: 1,
        // borderColor: '#2ecc71',
        // borderRadius: 30,
        // padding: 15,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginRight: 20,
        marginLeft: 20,
        width: 150,
        height: 150
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3969b7',
        textAlign: 'center',
    },
});
