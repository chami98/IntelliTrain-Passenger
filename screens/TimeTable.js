import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const TimeTable = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const baseURL = 'https://us-central1-sierra-80ddd.cloudfunctions.net/api/';
    const fetchData = () => {
        axios.get(`${baseURL}stations`).then(response => {
            setData(response.data)
            console.log(data);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (

        <View style={styles.container}>
            {
                loading ? <View style={styles.spinner}>
                    <ActivityIndicator size="large" style={{ alignSelf: 'center' }} />
                </View> : (
                    <Text style={styles.text}>Time Table</Text>

                )
            }
        </View>
    )
}

export default TimeTable

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 25
    }
})