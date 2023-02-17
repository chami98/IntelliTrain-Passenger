import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';

const Wallet = () => {
    const baseURL = 'https://us-central1-intellitrain-528b5.cloudfunctions.net/intelliTrain/';

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`${baseURL}data`).then(response => {
            setData(response.data)
            console.log(data[0].email);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, [])

    return (
        <View style={styles.container}>
            {loading ?
                <ActivityIndicator size="large" />
                : (<Text>{data[0].email ? data[0].email : ""}</Text>)}
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})