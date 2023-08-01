import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import CreditCardModal from './CreditCardModal';


const Wallet = ({ route }) => {
    const { email } = route.params;
    const baseURL = 'https://us-central1-intellitrain-528b5.cloudfunctions.net/intelliTrain/';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const fetchData = () => {
        axios.get(`${baseURL}data/${email}`).then(response => {
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
            {loading ?
                <View style={styles.spinner}>
                    <Image
                        style={styles.loader}
                        source={require('../assets/load.gif')}
                    />
                </View>
                : (<View>
                    <Text style={styles.title}>IntelliTrain Digital Wallet</Text>
                    <Text style={styles.welcome}>Welcome {data.firstName} !</Text>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.image}
                            source={require('../assets/wallet4.gif')
                            }
                        /></View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Avaliable Balance</Text>
                        <Text style={styles.balanceText}>Rs.{data.avaliableBalance}</Text>
                        <TouchableOpacity onPress={() => setShowModal(true)} style={{ marginTop: 10, backgroundColor: '#2ecc71', borderRadius: 30, paddingVertical: 15, paddingHorizontal: 30 }}>
                            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Top up</Text>
                        </TouchableOpacity>
                        <CreditCardModal
                            showModal={showModal}
                            setShowModal={setShowModal}
                            fetchData={fetchData}
                            email={email}
                        />
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
        fontSize: 31,
        marginTop: 100,
        color: '#3969b7',
        fontWeight: 'bold'
    }, welcome: {
        fontSize: 19,
        color: '#3969b7'
    }, textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    }, image: {
        marginTop: 60,
        height: 250,
        width: 250,
    }, imageView: {
        justifyContent: 'center',
        alignItems: 'center'
    }, text: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 20
    }, spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, balanceText:
    {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#3969b7',
        borderRadius: 10,
        padding: 8,
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 20
    }
})