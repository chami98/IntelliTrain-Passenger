import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Home = ({ route }) => {

    const { data } = route.params;
    return (

        <View style={styles.container}>
            <Text style={styles.text}>IntelliTrain</Text>
            <Text style={styles.text}>Welcome {data.firstName}</Text>

            <Image
                source={require('../assets/railway.png')}
            />
        </View>
    );
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})