import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../config/firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const handleSignOut = (navigation) => {
    signOut(auth).then(() => {
        console.log('successfull');
        navigation.navigate('Login');
    }).catch((error) => {
        console.log(error);

    });

}



const UserAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleSignOut(navigation)} style={{ marginTop: 10, backgroundColor: '#2ecc71', borderRadius: 30, paddingVertical: 15, paddingHorizontal: 30 }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sign Out</Text>
            </TouchableOpacity>
        </View>

    )
}

export default UserAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})