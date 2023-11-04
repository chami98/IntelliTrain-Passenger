import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import an icon library of your choice

const LiveUpdates = () => {
    return (
        <View>
            <Text style={{ ...styles.title, fontSize: 28, textAlign: 'center', marginTop: 20 }}>Live Updates</Text>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {trainUpdates.map((train, index) => (
                    <View style={styles.container} key={index}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{train.name}</Text>
                            {train.statusIcon && (
                                <Icon name={train.statusIcon.name} size={20} color={train.statusIcon.color} />
                            )}
                        </View>
                        <View style={styles.statusContainer}>
                            <Icon name={train.statusIcon.name} size={20} color={train.statusIcon.color} />
                            <Text style={{ ...styles.statusText, color: train.statusColor }}>
                                {train.status}
                            </Text>
                        </View>
                        <Text style={styles.detailsText}>{train.details}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const trainUpdates = [

    {
        name: 'Ruhunu Kumari | රුහුණු කුමාරි',
        status: 'Running on time',
        details: 'No reported delays or issues',
        statusIcon: { name: 'check-circle', color: 'green' },
        statusColor: 'green',
    },
    {
        name: 'Yal Devi | යාල් දේවි',
        status: 'Running on time',
        details: 'No reported delays or issues',
        statusIcon: { name: 'check-circle', color: 'green' },
        statusColor: 'green',
    },
    {
        name: 'Udarata Menike | උඩරට මැණිකේ',
        status: 'Slight delay due to weather conditions',
        details: 'Expect a delay of approximately 15 minutes',
        statusIcon: { name: 'exclamation-circle', color: 'red' },
        statusColor: 'red',
    },
    {
        name: 'Vavuniya Express | වවුනියා එක්ස්ප්‍රස්',
        status: 'Running on time',
        details: 'No reported delays or issues',
        statusIcon: { name: 'check-circle', color: 'green' },
        statusColor: 'green',
    },
    {
        name: 'Sagarika | සාගරිකා',
        status: 'Delayed due to maintenance work',
        details: 'Expect a delay of approximately 45 minutes',
        statusIcon: { name: 'exclamation-circle', color: 'red' },
        statusColor: 'red',
    },

    {
        name: 'Rajarata Rajina | රජරට රැජිණ',
        status: 'Delayed due to a technical issue',
        details: 'Expect a delay of approximately 20 minutes',
        statusIcon: { name: 'exclamation-circle', color: 'red' },
        statusColor: 'red',
    },
    {
        name: 'Badulla Night Mail | බදුල්ල නයිට් මෙල්',
        status: 'Delayed due to track maintenance',
        details: 'Expect a delay of approximately 30 minutes',
        statusIcon: { name: 'exclamation-circle', color: 'red' },
        statusColor: 'red',
    },

];

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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    statusText: {
        fontSize: 15,
        marginLeft: 5,
    },
    detailsText: {
        color: '#333',
        fontSize: 15,
        marginBottom: 10,
    },
});

export default LiveUpdates;
