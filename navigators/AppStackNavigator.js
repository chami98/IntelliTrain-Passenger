import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeTable from '../screens/TimeTable';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackTrain from '../screens/TrackTrain';

const AppStackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>

            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name='TimeTable' component={TimeTable} />
                <Stack.Screen options={{ headerShown: false }} name='TrackTrain' component={TrackTrain} />
                {/* <Stack.Screen options={{ headerShown: false }} name='AppTabNavigator' component={AppTabNavigator} /> */}
            </Stack.Navigator>
        </>
    )
}

export default AppStackNavigator

const styles = StyleSheet.create({})