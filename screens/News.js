import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install the required icons package

const News = () => {
    const newsData = [
        {
            id: '12',
            title: 'New Rail Link to Connect Northern and Southern Sri Lanka',
            description: 'A new rail link project aims to connect the northern and southern regions of Sri Lanka...',
            date: '2023-08-02',
            source: 'Sri Lanka Railways Gazette',
            icon: 'ios-train'
        },
        {
            id: '13',
            title: 'Sri Lanka Railways Celebrates 150 Years of Service',
            description: 'The nation celebrates a century and a half of railway operations in Sri Lanka...',
            date: '2023-08-01',
            source: 'Sri Lanka Rail Heritage',
            icon: 'ios-ribbon'
        },
        {
            id: '14',
            title: 'Modernization Plans for Colombo\'s Main Railway Station',
            description: 'Colombo\'s main railway station set to undergo modernization with advanced facilities...',
            date: '2023-07-31',
            source: 'Colombo Railway Times',
            icon: 'ios-build'
        },
        {
            id: '15',
            title: 'Sri Lanka Railways Launches New Luxury Train Service',
            description: 'A new luxury train service offers passengers a premium travel experience...',
            date: '2023-07-30',
            source: 'Sri Lanka Travel Express',
            icon: 'ios-star'
        },
        {
            id: '16',
            title: 'Railway Safety Campaign Launched to Educate Commuters',
            description: 'A safety awareness campaign aims to educate railway commuters about safe travel practices...',
            date: '2023-07-29',
            source: 'Sri Lanka Rail Safety Initiative',
            icon: 'ios-warning'
        },
        {
            id: '17',
            title: 'Sri Lanka Railways to Introduce Online Ticket Booking System',
            description: 'Passengers will soon be able to conveniently book train tickets online...',
            date: '2023-07-28',
            source: 'Sri Lanka Rail Tech News',
            icon: 'ios-globe'
        },
        {
            id: '19',
            title: 'Sri Lanka Railways Launches Eco-Friendly Trains',
            description: 'New environmentally-friendly trains are introduced to promote sustainable travel...',
            date: '2023-07-26',
            source: 'Green Railways Sri Lanka',
            icon: 'ios-leaf'
        },
        {
            id: '20',
            title: 'Heritage Train Ride to Explore Cultural Sites',
            description: 'A heritage train ride offers passengers a journey through Sri Lanka\'s cultural landmarks...',
            date: '2023-07-25',
            source: 'Sri Lanka Cultural Explorer',
            icon: 'ios-compass'
        },
        {
            id: '21',
            title: 'Sri Lanka Railways Initiates Safety Inspections',
            description: 'Comprehensive safety inspections are conducted across the railway network...',
            date: '2023-07-24',
            source: 'Railway Safety Watch',
            icon: 'ios-clipboard'
        },
        {
            id: '22',
            title: 'Special Discounted Fares for Festive Season',
            description: 'Passengers enjoy special discounted fares for the upcoming festive season...',
            date: '2023-07-23',
            source: 'Sri Lanka Festival Travel',
            icon: 'ios-pricetags'
        },
        {
            id: '23',
            title: 'Revival of Historic Railway Stations Underway',
            description: 'Efforts to restore and revive historic railway stations are in progress...',
            date: '2023-07-22',
            source: 'Sri Lanka Railway Restoration Society',
            icon: 'ios-hammer'
        },
        {
            id: '24',
            title: 'New Partnership to Enhance Railway Connectivity',
            description: 'Collaboration between Sri Lanka Railways and a tech company to improve connectivity...',
            date: '2023-07-21',
            source: 'ConnectRail Sri Lanka',
            icon: 'ios-link'
        },

        // Add more news items
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Latest Railway News</Text>
            <ScrollView style={styles.newsScrollView}>
                {newsData.map((item) => (
                    <View key={item.id} style={styles.newsItem}>
                        <Ionicons name={item.icon} size={24} color="#3969b7" style={styles.icon} />
                        <View style={styles.newsContent}>
                            <Text style={styles.newsTitle}>{item.title}</Text>
                            <Text style={styles.newsDescription}>{item.description}</Text>
                            <Text style={styles.newsSourceDate}>{item.source} - {item.date}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop: 25,
        color: '#3969b7',
    },
    newsScrollView: {
        flex: 1,
    },
    newsItem: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 16,
        fontSize: 32, // Increase the icon size
        color: '#3969b7', // You can customize the color if needed
    },
    newsContent: {
        flex: 1,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333',
    },
    newsDescription: {
        fontSize: 14,
        marginBottom: 8,
        color: '#666',
    },
    newsSourceDate: {
        fontSize: 12,
        color: '#888',
    },
});

export default News;
