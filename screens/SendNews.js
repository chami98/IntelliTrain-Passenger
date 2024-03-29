import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';


const SendNews = () => {
    const [title, setTitle] = useState('');
    const [news, setNews] = useState('');
    const [date, setDate] = useState('');
    const [name, setName] = useState('');

    const handleSendNews = () => {
        console.log('Title:', title);
        console.log('News:', news);
        console.log('Date:', date);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send News</Text>
            <Image source={require('../assets/train-gif.gif')} style={{ width: 280, height: 280, marginBottom: 15 }} />
            <TextInput
                style={styles.input}
                placeholder="Title"
                onChangeText={(text) => setTitle(text)}
                value={title}
            />
            <TextInput
                style={styles.textArea}
                placeholder="News"
                multiline
                numberOfLines={4}
                onChangeText={(text) => setNews(text)}
                value={news}
            />
            <TextInput
                style={styles.input}
                placeholder="Date"
                onChangeText={(text) => setDate(text)}
                value={date}
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSendNews}
            >
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.footerText}>© {new Date().getFullYear()} Chamikara Mendis</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    // Container for the entire screen
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        padding: 20,
    },
    // Style for the title text
    title: {
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    // Style for the input fields
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    // Style for the text area field
    textArea: {
        width: '100%',
        height: 120,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 15,
    },
    // Style for the send button
    sendButton: {
        backgroundColor: '#3969b7',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 80,
        paddingLeft: 80,
        borderRadius: 15,
    },
    // Style for the send button text
    buttonText: {
        color: "white",
        fontSize: 18
    },
    // Style for the footer
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    // Style for the footer text
    footerText: {
        fontSize: 16,
        color: '#777',
    },
});

export default SendNews;