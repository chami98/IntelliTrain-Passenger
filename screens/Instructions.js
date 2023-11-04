import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Instructions = () => {
    return (
        <ScrollView style={styles.container}>




            <Text style={styles.title}>Instructions to Submit Lost and Found Items</Text>
            <Image source={require('../assets/hello.gif')} style={styles.image} />
            <Text style={styles.text}>1. Navigate to the 'Submit Item' screen from the main menu.</Text>
            <Text style={styles.text}>2. Enter the name of the item in the 'Item Name' field.</Text>
            <Text style={styles.text}>3. Enter a description of the item in the 'Description' field.</Text>
            <Text style={styles.text}>4. Enter the location where the item was lost or found in the 'Location' field.</Text>
            <Text style={styles.text}>5. Enter the date when the item was lost or found in the 'Date' field.</Text>
            <Text style={styles.text}>6. Press the 'Submit' button to submit the item.</Text>
        </ScrollView>
    );
};

export default Instructions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3969b7',
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
        lineHeight: 24,
        textAlign: 'justify',
    }, image: {
        width: 400,
        height: 300,
        marginTop: 20,
        alignSelf: 'center',
    },
});