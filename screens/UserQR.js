import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
let logoFromFile = require('../assets/trainLogo.png');


const UserQR = ({ route }) => {

    const { data } = route.params;
    const email = data.email;
    const uid = data.uid;
    const firstName = data.firstName;
    const lastName = data.lastName;

    return (
        <View style={styles.container}>
            {/* <Text style={{ ...styles.text, fontSize: 27, }}>My QR code</Text> */}
            <Text style={{ ...styles.text, marginTop: 10, fontSize: 27 }}>{firstName} {lastName}</Text>

            <View style={styles.QRContainer}>
                <QRCode
                    value={uid}
                    size={300}
                    color='black'
                    backgroundColor='#fff'
                    logo={logoFromFile}
                />

            </View>
            <Text style={{ ...styles.text, marginTop: 10, }}>Code: {uid}</Text>
            <Text style={{ ...styles.text }}>Email: {email}</Text>
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
        fontSize: 16,
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