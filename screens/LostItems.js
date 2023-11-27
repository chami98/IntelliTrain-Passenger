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

    // Return the JSX to render
    return (
        // Use the View component as a container
        <View style={styles.container}>
            // Display the title
            <Text style={styles.title}>Lost Items</Text>
            // Use the FlatList component to display a list of lost items
            <FlatList
                // The data prop is the array of lost items
                data={lostItems}
                // The keyExtractor prop is a function that returns a unique identifier for each item
                keyExtractor={(item) => item.id}
                // The renderItem prop is a function that returns the JSX to render for each item
                renderItem={({ item }) => (
                    // Use the View component as a container for each item
                    <View style={styles.itemContainer}>
                        // Display the name of the item
                        <Text style={styles.itemName}>{item.name}</Text>
                        // Display the description of the item
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        // Display the location of the item
                        <Text style={styles.itemLocation}>Location: {item.location}</Text>
                        // Display the date of the item
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
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3969b7',
        marginBottom: 20,
        textAlign: 'center',
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    itemDescription: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
    itemLocation: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
    itemDate: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
});
