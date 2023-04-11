import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SimpleAccordion } from 'react-native-simple-accordion';

const TrainDetails = ({ route }) => {

    const { directTrains } = route.params;

    return (
        <ScrollView>
            <Text style={styles.title}>{`${directTrains[0].startStationName} - ${directTrains[0].endStationName}`}</Text>
            <View style={styles.container}>
                {directTrains.map((train) => (
                    <View key={train.arrivalTime} style={{ width: "90%" }}>
                        <SimpleAccordion viewInside={<View>
                            <Text>{`Start Station : ${train.startStationName}`}</Text>
                            <Text>{`Departure Time: ${train.depatureTime}`}</Text>
                            <Text>{`Train Frequency: ${train.trainFrequncy}`}</Text>
                            <Text>{`End Station: ${train.endStationName}`}</Text>
                            <Text>{`Arrival Time: ${train.arrivalTimeEndStation}`}</Text>
                            <Text>{`Train No: ${train.trainNo}`}</Text>
                        </View>} title={`${train.arrivalTime} ${train.trainName.toUpperCase()}`} viewContainerStyle={{
                            padding: 16,
                            margin: 10,
                        }} bannerStyle={{
                            height: 70,
                            flexDirection: "row",
                            backgroundColor: "white",
                            padding: 16,
                            alignItems: "center",
                            textAlign: 'center',
                            margin: 10
                        }} titleStyle={{ color: '#3969b7', textAlign: 'center' }} arrowColor='#3969b7' />
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default TrainDetails

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 15,
        fontSize: 20,
        color: '#3969b7',
        fontWeight: 'bold'
    }
})