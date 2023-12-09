import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const Instructions = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Instructions to Submit Lost and Found Items</Text>
            <Image source={require('../assets/hello.gif')} style={styles.image} />
            <Text style={styles.sectionTitle}>Clear Submission Guidelines:</Text>
            <Text style={styles.sectionText}>Follow the platform's submission guidelines and policies for lost and found items.</Text>
            <Text style={styles.sectionText}>Do not disclose specific items within a found bag when making a submission.</Text>
            <Text style={styles.sectionTitle}>Anonymous Descriptions:</Text>
            <Text style={styles.sectionText}>Provide a general, anonymous description of the found item, focusing on attributes like color, size, material, or unique features.</Text>
            <Text style={styles.sectionText}>Avoid listing specific contents of a found bag to protect your privacy.</Text>
            <Text style={styles.sectionTitle}>Verification Process:</Text>
            <Text style={styles.sectionText}>Expect a verification process to confirm item ownership before release.</Text>
            <Text style={styles.sectionText}>Be prepared to provide additional details about your lost item as necessary.</Text>
            <Text style={styles.sectionText}>If in doubt about a claimed item, request further verification.</Text>
            <Text style={styles.sectionTitle}>Contact Information:</Text>
            <Text style={styles.sectionText}>Provide accurate contact information when submitting a lost or found item.</Text>
            <Text style={styles.sectionText}>Ensure the platform has a reliable way to reach you for further details or clarifications.</Text>
            <Text style={styles.sectionText}>Your contact information will be kept confidential and used solely for this purpose.</Text>
            <Text style={styles.sectionTitle}>Privacy and Data Protection:</Text>
            <Text style={styles.sectionText}>Rest assured that your personal information, including contact details, will be protected and not shared without your consent.</Text>
            <Text style={styles.sectionText}>The platform adheres to privacy regulations in your area.</Text>
            <Text style={styles.sectionTitle}>Public Awareness:</Text>
            <Text style={styles.sectionText}>Be aware of the potential risks of sharing detailed information about lost and found items.</Text>
            <Text style={styles.sectionText}>Help us maintain a secure environment by not disclosing sensitive information.</Text>
            <Text style={styles.sectionTitle}>Reporting Suspicious Activity:</Text>
            <Text style={styles.sectionText}>If you encounter any suspicious activity or potential scams related to lost and found items, please report it immediately.</Text>
            <Text style={styles.sectionText}>Use the platform's reporting mechanism to ensure swift action is taken.</Text>
        </ScrollView>
    );
};

export default Instructions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3969b7',
        marginBottom: 20,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3969b7',
        marginTop: 20,
    },
    sectionText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 20,
        lineHeight: 24,
        marginLeft: 20,
    },
    image: {
        width: 400,
        height: 300,
        marginTop: 20,
        alignSelf: 'center',
    },
});
