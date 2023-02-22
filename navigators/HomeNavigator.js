import { StyleSheet, } from 'react-native';
import UserQR from '../screens/UserQR';
import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomeNavigator = ({ route }) => {

    const baseURL = 'https://us-central1-intellitrain-528b5.cloudfunctions.net/intelliTrain/';
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const fetchData = () => {

        setTimeout(() => {
            axios.get(`${baseURL}data/${email}`).then(response => {
                setData(response.data)
                console.log(data);
                setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);
            })
        }, 3000);


    }
    useEffect(() => {
        fetchData();
    }, [])

    const Tab = createBottomTabNavigator();
    const { email } = route.params;
    const { user } = route.params;

    return (
        <>
            {loading ? <View style={styles.spinner}>
                <ActivityIndicator size="large" style={{ alignSelf: 'center' }} />
            </View> : (
                <Tab.Navigator screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home-outline' : 'home-outline';
                        } else if (route.name === 'UserQR') {
                            iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
                        } else if (route.name === 'Wallet') {
                            iconName = focused ? 'wallet-outline' : 'wallet-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },

                    headerShown: false
                })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}

                >
                    <Tab.Screen name="Home" component={Home} initialParams={{ "data": data }}
                    />
                    <Tab.Screen name="UserQR" component={UserQR} initialParams={{ "email": email }}
                    />
                    <Tab.Screen name="Wallet" component={Wallet} initialParams={{ "email": email }}
                    />
                </Tab.Navigator>
            )}

        </>
    )
}

export default HomeNavigator

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})