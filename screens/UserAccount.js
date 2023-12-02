import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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



const UserAccount = ({ navigation, route }) => {

    const { data } = route.params;
    return (
        <View style={styles.container}>



            <View style={styles.textContainer}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={require('../assets/user.gif')
                        }
                    /></View>

                <Text style={styles.titleText}>USER DETAILS</Text>



                <Text style={styles.text}>{data.firstName} {data.lastName}</Text>

                <Text style={styles.text}>{data.email}</Text>

                <Text style={styles.text}>{data.phoneNumber}</Text>
                <TouchableOpacity onPress={() => handleSignOut(navigation)} style={{ marginTop: 10, backgroundColor: '#2ecc71', borderRadius: 30, paddingVertical: 15, paddingHorizontal: 30 }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sign Out</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default UserAccount

const styles = StyleSheet.create({
    // Container style for the entire screen
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // Container style for the main text section
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        // Box shadow properties
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
        height: 500,
    },
    // Style for the main text
    text: {
        fontSize: 25,
        marginBottom: 5
    },
    // Style for the title text
    titleText: {
        marginBottom: 10,
        fontSize: 33,
        fontWeight: 'bold',
        color: "#3969b7"
    },
    // Style for images
    image: {
        height: 200,
        width: 200,
    },
    // Container style for the image view
    imageView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
