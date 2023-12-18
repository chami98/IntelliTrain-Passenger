import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const FoundItems = () => {
    const foundItems = [
        { id: '1', name: 'Wallet', description: 'Black leather wallet', location: 'Ragama Train Station', date: '2022-01-01' },
        { id: '2', name: 'Phone', description: 'iPhone 12 Pro Max', location: 'Udarata Manike Train', date: '2022-01-02' },
        { id: '3', name: 'Keys', description: 'Set of house keys', location: 'Galle Train Station', date: '2022-01-03' },
        { id: '4', name: 'Laptop', description: 'MacBook Pro', location: 'Colombo Fort Train Station', date: '2022-01-04' },
        { id: '5', name: 'Watch', description: 'Luxury wristwatch', location: 'Negombo Beach Train Station', date: '2022-01-05' },
        { id: '6', name: 'Backpack', description: 'Red backpack', location: 'Ella Train Station', date: '2022-01-06' },
        { id: '7', name: 'Sunglasses', description: 'Designer sunglasses', location: 'Kandy Train Station', date: '2022-01-07' },
        // Add more items with train names or train stations in Sri Lanka as needed
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Found Items</Text>
            <ScrollView style={styles.itemsScrollView}>
                {foundItems.map((item) => (
                    <View key={item.id} style={styles.item}>
                        <View style={styles.itemContent}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemLocationDate}>Location: {item.location} - Date: {item.date}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default FoundItems;

const styles = StyleSheet.create({
    // Style for the main container
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    // Style for the heading text
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3969b7',
        marginBottom: 20,
        textAlign: 'center',
    },
    // Style for the scroll view containing the items
    itemsScrollView: {
        marginTop: 10,
    },
    // Style for each individual item
    item: {
        flexDirection: 'row',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        paddingBottom: 10,
    },
    // Style for the content of each item
    itemContent: {
        flex: 1,
        paddingLeft: 10,
    },
    // Style for the name of each item
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    // Style for the description of each item
    itemDescription: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    // Style for the location and date of each item
    itemLocationDate: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
});