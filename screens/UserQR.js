import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
let logoFromFile = require('../assets/trainLogo.png');


const UserQR = ({ route }) => {

    const { email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.text, fontSize: 27, }}>My QR code</Text>
            <View style={styles.QRContainer}>
                <QRCode
                    value={email}
                    size={300}
                    color='black'
                    backgroundColor='#fff'
                    logo={logoFromFile}
                />

            </View>
            <Text style={{ ...styles.text, marginTop: 10, }}>{email}</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    }, text: {
        marginBottom: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3969b7'
    },
    QRContainer: {
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
        marginRight: 20,
        marginLeft: 20,
        width: 340,
        height: 340,
    }
});
export default UserQR;