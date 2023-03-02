import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const News = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>News</Text>
        </View>
    )
}

export default News
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#3969b7',
        fontWeight: 'bold',
        fontSize: 25
    }
})