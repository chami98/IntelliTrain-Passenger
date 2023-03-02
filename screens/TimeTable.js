import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TimeTable = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Time Table</Text>
        </View>
    )
}

export default TimeTable

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