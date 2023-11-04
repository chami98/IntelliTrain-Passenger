import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LostAndFound = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Lost & Found</Text>
                <Image source={require('../assets/lost3.gif')} style={styles.image} />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('AppStackNavigator', { screen: 'LostItems' })}>
                        <Icon name="ios-search" size={60} color="#3969b7" />
                        <Text style={styles.buttonText}>Lost Items</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('AppStackNavigator', { screen: 'FoundItems' })}>
                        <Icon name="ios-eye" size={60} color="#3969b7" />
                        <Text style={styles.buttonText}>Found Items</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('AppStackNavigator', { screen: 'SubmitItem' })}>
                        <Icon name="ios-add-circle" size={60} color="#3969b7" />
                        <Text style={styles.buttonText}>Submit Lost / Found Item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Icon name="ios-information-circle" size={60} color="#3969b7" />
                        <Text style={styles.buttonText}>Instructions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LostAndFound;

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3969b7',
        marginBottom: 20,
    },
    image: {
        width: 280,
        height: 280,
        marginTop: 35,
        borderRadius: 140,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 20,
        marginLeft: 20,
        width: 150,
        height: 150
    },
    buttonText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#3969b7',
        textAlign: 'center',
    },
});