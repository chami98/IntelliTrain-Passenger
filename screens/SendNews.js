import React, { useState } from 'react';
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
        console.log('Photos:', photos);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send News</Text>
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
            <Button
                title="Send"
                onPress={handleSendNews}
                color="#3969b7"
                style={styles.sendButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    title: {
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    textArea: {
        width: '80%',
        height: 120,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    sendButton: {
        backgroundColor: '#3969b7',
        padding: 10,
        borderRadius: 5,
    },
});

export default SendNews;
