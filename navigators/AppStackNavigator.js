import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeTable from '../screens/TimeTable';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackTrain from '../screens/TrackTrain';
import News from '../screens/News';
import LiveUpdates from '../screens/LiveUpdates';
import SendNews from '../screens/SendNews';
import LostAndFound from '../screens/LostAndFound';
import TrainDetails from '../screens/TrainDetails';
import MapContainer from '../screens/MapContainer';
import LostItems from '../screens/LostItems';
import FoundItems from '../screens/FoundItems';
import SubmitItem from '../screens/SubmitItem';
import Instructions from '../screens/Instructions';

const AppStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>

            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name='TimeTable' component={TimeTable} />
                <Stack.Screen options={{ headerShown: false }} name='TrainDetails' component={TrainDetails} />
                <Stack.Screen options={{ headerShown: false }} name='TrackTrain' component={TrackTrain} />
                <Stack.Screen options={{ headerShown: false }} name='MapContainer' component={MapContainer} />
                <Stack.Screen options={{ headerShown: false }} name='News' component={News} />
                <Stack.Screen options={{ headerShown: false }} name='LiveUpdates' component={LiveUpdates} />
                <Stack.Screen options={{ headerShown: false }} name='SendNews' component={SendNews} />
                <Stack.Screen options={{ headerShown: false }} name='LostAndFound' component={LostAndFound} />
                <Stack.Screen options={{ headerShown: false }} name='LostItems' component={LostItems} />
                <Stack.Screen options={{ headerShown: false }} name='FoundItems' component={FoundItems} />
                <Stack.Screen options={{ headerShown: false }} name='SubmitItem' component={SubmitItem} />
                <Stack.Screen options={{ headerShown: false }} name='Instructions' component={Instructions} />
            </Stack.Navigator>
        </>
    )
}

export default AppStackNavigator

const styles = StyleSheet.create({})