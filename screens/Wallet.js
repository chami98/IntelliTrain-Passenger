import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import { Badge, Box, Center, NativeBaseProvider } from "native-base";

const Wallet = ({ route }) => {
    const { email } = route.params;
    const baseURL = 'https://us-central1-intellitrain-528b5.cloudfunctions.net/intelliTrain/';

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`${baseURL}data/${email}`).then(response => {
            setData(response.data)
            console.log(data);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, [])

    return (
        <View style={styles.container}>
            {loading ?

                <View style={styles.spinner}>
                    <ActivityIndicator size="large" style={{ alignSelf: 'center' }} />
                </View>
                : (<View>
                    <Text style={styles.title}>IntelliTrain Digital Wallet</Text>
                    <Text style={styles.welcome}>Welcome {data.firstName} !</Text>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            source={require('../assets/wallet.png')
                            }
                        /></View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Avaliable Balance</Text>
                        <Text style={styles.balanceText}>Rs.{data.avaliableBalance}</Text>
                    </View>

                </View>
                )}
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        marginTop: 100
    }, welcome: {
        fontSize: 17
    }, textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }, image: {
        marginTop: 60,
        height: 300,
        width: 300,
    }, imageView: {
        justifyContent: 'center',
        alignItems: 'center'
    }, text: {
        fontSize: 17,
        marginBottom: 10
    }, spinner: {
        justifyContent: 'center',
        alignItems: 'center'
    }, balanceText:
    {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#3bb99b',
        borderRadius: 10,
        padding: 8,
        color: '#3bb99b',
        fontWeight: 'bold'
    }
})