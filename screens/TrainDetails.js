import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleAccordion } from 'react-native-simple-accordion';
import axios from 'axios';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const marginTop = windowHeight * 0.1; // 50% of window height


const TrainDetails = ({ route }) => {

    const startStationValue = route.params?.startStationValue;
    const endStationValue = route.params?.endStationValue;

    const [directTrains, setDirectTrains] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('https://us-central1-sierra-80ddd.cloudfunctions.net/api/trains', {
            params: {
                startStaion: startStationValue,
                endStation: endStationValue,
            },
        })
            .then(response => {
                setDirectTrains(response.data.RESULTS.directTrains);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [])


    return (
        <ScrollView>
            {loading ? <View style={styles.spinner}>
                <Image
                    style={styles.image}
                    source={require('../assets/load.gif')}
                />
            </View> : (
                <>
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
                </>
            )}


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
    }, spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: marginTop,
    },

})