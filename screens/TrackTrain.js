import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const TrackTrain = () => {

    const customMarkerIcon = require('../assets/train_marker.png');

    const galleCricketGroundCoordinate = {
        latitude: 6.933892799709468,
        longitude: 79.85028768642393
    };

    const initialRegion = {
        latitude: galleCricketGroundCoordinate.latitude,
        longitude: galleCricketGroundCoordinate.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                <Marker coordinate={galleCricketGroundCoordinate} title="Yaal Dewi / යාල් දේවි" >
                    <Image source={customMarkerIcon} style={styles.customMarkerIcon} />
                </Marker>
            </MapView>
        </View>
    )
}

export default TrackTrain
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
    },
    map: {
        flex: 1,
        width: '100%',
    }, customMarkerIcon: {
        width: 45,
        height: 45,
    },
})