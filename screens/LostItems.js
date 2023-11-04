import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const LostItems = () => {
    const lostItems = [
        { id: '1', name: 'Wallet', description: 'Black leather wallet', location: 'Ragama Train Station', date: '2022-01-01' },
        { id: '2', name: 'Phone', description: 'iPhone 12 Pro Max', location: 'Udarata Manike Train', date: '2022-01-02' },
        { id: '3', name: 'Keys', description: 'Set of house keys', location: 'Galle Train Station', date: '2022-01-03' },
        { id: '4', name: 'Laptop', description: 'MacBook Pro', location: 'Colombo Fort Train Station', date: '2022-01-04' },
        { id: '5', name: 'Watch', description: 'Luxury wristwatch', location: 'Negombo Beach Train Station', date: '2022-01-05' },
        { id: '6', name: 'Backpack', description: 'Red backpack', location: 'Ella Train Station', date: '2022-01-06' },
        { id: '7', name: 'Sunglasses', description: 'Designer sunglasses', location: 'Kandy City Center Train Station', date: '2022-01-07' },
        // Add more items with train names or train stations in Sri Lanka as needed
    ];


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lost Items</Text>
            <FlatList
                data={lostItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemLocation}>Location: {item.location}</Text>
                        <Text style={styles.itemDate}>Date: {item.date}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default LostItems;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemDescription: {
        fontSize: 16,
        color: '#666',
    },
    itemLocation: {
        fontSize: 16,
        color: '#666',
    },
    itemDate: {
        fontSize: 16,
        color: '#666',
    },
});