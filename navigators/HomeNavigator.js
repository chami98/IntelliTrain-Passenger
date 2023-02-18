import { StyleSheet, } from 'react-native';
import UserQR from '../screens/UserQR';
import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';


const HomeNavigator = ({ route }) => {
    const Tab = createBottomTabNavigator();
    const { email } = route.params;

    return (

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
            <Tab.Screen name="Home" component={Home}
            />
            <Tab.Screen name="UserQR" component={UserQR} initialParams={{ "email": email }}
            />
            <Tab.Screen name="Wallet" component={Wallet} initialParams={{ "email": email }}
            />
        </Tab.Navigator>



    )
}

export default HomeNavigator

const styles = StyleSheet.create({})