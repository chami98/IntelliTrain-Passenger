import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
let logoFromFile = require('../assets/trainLogo.png');


const UserQR = ({ route }) => {

    const { email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>My QR code</Text>
            <QRCode
                value={email}
                size={300}
                color='black'
                backgroundColor='white'
                logo={logoFromFile}
            />
            <Text style={styles.text}>{email}</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, text: {
        marginBottom: 10,
        fontSize: 20
    }
});
export default UserQR;