import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ route, navigation }) => {

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
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'TimeTable' })}>
                        <Ionicons name="timer-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Time Table</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'TrackTrain' })}>
                        <Ionicons name="train-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Track Train</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'News' })}>
                        <Ionicons name="newspaper-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'LiveUpdates' })}>
                        <Ionicons name="pulse-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Live Updates</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'SendNews' })}>
                        <Ionicons name="chatbubbles-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Send News</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', { screen: 'LostAndFound' })}>
                        <Ionicons name="help-buoy-outline" size={60} color='#3969b7' />
                        <Text style={styles.buttonText}>Lost & Found</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Home;


const styles = StyleSheet.create({
    // Style for the main container
    container: {
        marginTop: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    // Style for the text container
    textContainer: {
        alignItems: 'center',
    },
    // Style for the app name text
    appName: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#3969b7'
    },
    // Style for the slogan text
    slogan: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 16,
        fontStyle: 'italic',
        color: '#3969b7',
        fontWeight: 'bold'
    },
    // Style for the greeting text
    greeting: {
        fontSize: 22,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    // Style for the button container
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Style for the row layout
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    // Style for the button
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
    // Style for the button text
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3969b7',
        textAlign: 'center',
    },
});
