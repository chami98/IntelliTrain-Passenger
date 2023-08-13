import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const TrackTrain = ({ route, navigation }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Select Train</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 9.6652,
                    longitude: 80.0208,
                    title: "Yaal Dewi / යාල් දේවි"
                }
            })}>
                <Text style={styles.buttonText}>Yaal Dewi / යාල් දේවි</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 6.9800,
                    longitude: 81.0597,
                    title: "Udarata Menike / උඩරට මැණිකේ"
                }
            })}>
                <Text style={styles.buttonText}>Udarata Menike / උඩරට මැණිකේ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 7.2896,
                    longitude: 80.6324,
                    title: "Podi Menike / පොඩි මැණිකේ"
                }
            })}>
                <Text style={styles.buttonText}>Podi Menike / පොඩි මැණිකේ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 9.8147,
                    longitude: 80.0482,
                    title: "Uttara Devi / උත්තරා දේවි"
                }
            })}>
                <Text style={styles.buttonText}>Uttara Devi / උත්තරා දේවි</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 6.0333,
                    longitude: 80.2144,
                    title: "Galu Kumari / ගාලු කුමාරි"
                }
            })}>
                <Text style={styles.buttonText}>Galu Kumari / ගාලු කුමාරි</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppStackNavigator', {
                screen: 'MapContainer',
                params: {
                    latitude: 8.3444,
                    longitude: 80.4108,
                    title: "Rajarata Rajini / රජරට රැජිණි"
                }
            })}>
                <Text style={styles.buttonText}>Rajarata Rajini / රජරට රැජිණි</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TrackTrain
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, button: {
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 320,
        height: 90,
        margin: 10
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3969b7',
        textAlign: 'center',
    },
    text: {
        fontSize: 22,
        color: '#2ecc71',
        fontWeight: 'bold',
    },

})