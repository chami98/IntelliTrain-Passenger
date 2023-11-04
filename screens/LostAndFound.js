import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LostAndFound = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Lost & Found</Text>
                <Image source={require('../assets/lost3.gif')} style={{ width: 280, height: 280, marginTop: 35 }} />
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
                    <TouchableOpacity style={styles.button}>
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
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3969b7',
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
        width: 150,
        height: 150
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3969b7',
        textAlign: 'center',
    },
});