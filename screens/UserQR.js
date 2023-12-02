import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoFromFile from '../assets/trainLogo.png';

const UserQR = ({ route }) => {
    const { data } = route.params;
    const { email, uid, firstName, lastName } = data;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>My QR Code</Text>
            </View>
            <View style={styles.nameContainer}>
                <Icon name="user" size={24} color="#666" style={styles.icon} />
                <Text style={styles.nameText}>{firstName} {lastName}</Text>
            </View>

            <View style={styles.QRContainer}>
                <QRCode
                    value={uid}
                    size={300}
                    color='#3969b7'
                    backgroundColor='#fff'
                    logo={logoFromFile}
                />
            </View>

            <Text style={styles.codeText}>Code: {uid}</Text>
            {/* Uncomment this line if you want to display the email */}
            {/* <Text style={styles.codeText}>Email: {email}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    // Container style for the entire screen
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Container style for the title section
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    // Container style for the name section
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    // Style for the title text
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#2ecc71',
        marginLeft: 8, // Add left margin to align text with the icon
    },
    // Style for the name text
    nameText: {
        fontSize: 24,
        color: '#666',
        marginLeft: 8, // Add left margin to align text with the icon
    },
    // Container style for the QR code section
    QRContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        // Box shadow properties
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 6,
        width: 340,
        height: 340,
        marginBottom: 20,
    },
    // Style for the QR code text
    codeText: {
        fontSize: 18,
        color: '#666',
    },
    // Style for icons used in the component
    icon: {
        marginRight: 8,
    },
});


export default UserQR;
