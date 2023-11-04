import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const LiveUpdates = () => {
    return (
        <View>
            <Text style={{ ...styles.title, fontSize: 28, textAlign: 'center', marginTop: 20 }}>Live Updates</Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <Text style={styles.title}>Sagarika </Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>Delayed due to maintenance work</Text>
                    </View>
                    <Text style={styles.detailsText}>Expect a delay of approximately 45 minutes.</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Ruhunu Kumari </Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>Running on time</Text>
                    </View>
                    <Text style={styles.detailsText}>No reported delays or issues.</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Yal Devi </Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>Running on time</Text>
                    </View>
                    <Text style={styles.detailsText}>No reported delays or issues.</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Udarata Menike </Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>Slight delay due to weather conditions</Text>
                    </View>
                    <Text style={styles.detailsText}>Expect a delay of approximately 15 minutes.</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>Rajarata Rajina </Text>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>Delayed due to a technical issue</Text>
                    </View>
                    <Text style={styles.detailsText}>Expect a delay of approximately 20 minutes.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default LiveUpdates;

const styles = StyleSheet.create({
    scrollViewContent: {
        padding: 20,
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 1,
    },
    title: {
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    statusText: {
        color: 'red',
        fontSize: 18,
        marginRight: 10,
    },
    detailsText: {
        color: '#333',
        fontSize: 16,
        marginBottom: 10,
    },
    alternativeRouteText: {
        color: 'green',
        fontSize: 16,
        marginBottom: 10,
    },
    emergencyContactText: {
        color: '#333',
        fontSize: 16,
    },
});
