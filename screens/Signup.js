import * as React from "react";
import { useState } from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../config/firebaseConfig';
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";


const Signup = () => {

    const baseURL = 'https://us-central1-intellitrain-528b5.cloudfunctions.net/intelliTrain/';

    const navigation = useNavigation();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = useState("");

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Function to handle user sign up
    // Function to handle user sign up
    const handleSignUp = () => {
        // Use Firebase's createUserWithEmailAndPassword function to create a new user
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Prepare the data to be sent to the backend
                const data = {
                    // The user's access token
                    "token": userCredential.user.accessToken,
                    // The user's first name
                    "firstName": firstName,
                    // The user's last name
                    "lastName": lastName,
                    // The user's phone number
                    "phoneNumber": phoneNumber,
                }
                // Send a POST request to the signup endpoint of the backend
                axios.post(`${baseURL}signup`, data);
                // Navigate to the AppTabNavigator screen, passing the email as a parameter
                navigation.navigate('AppTabNavigator', { "email": email })
            })
            .catch((error) => {
                // Log any errors to the console
                console.log(error)
                // Show an alert with the error message
                Alert.alert(error.message)
            });
    }

    return
    // Center component to center its children
    <Center w="100%">
        {/* Box component to hold the form */}
        <Box safeArea p="2" w="90%" maxW="290" py="8">
            {/* Heading components for the title and subtitle */}
            <Heading size="lg" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }} fontWeight="semibold">
                Welcome
            </Heading>
            <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
            }} fontWeight="medium" size="xs">
                Sign up to continue!
            </Heading>
            {/* VStack component to vertically stack the form fields */}
            <VStack space={3} mt="5">
                {/* FormControl components for each input field */}
                <FormControl>
                    <FormControl.Label>First Name</FormControl.Label>
                    <Input onChangeText={(text) => setFirstName(text)} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Last Name</FormControl.Label>
                    <Input onChangeText={(text) => setLastName(text)} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Phone Number</FormControl.Label>
                    <Input onChangeText={(text) => setPhoneNumber(text)} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input onChangeText={(text) => setEmail(text)} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input type="password" onChangeText={(text) => setPassword(text)} />
                </FormControl>
                {/* Button component to submit the form */}
                <Button mt="2" colorScheme="indigo" onPress={handleSignUp} >
                    Sign up
                </Button>
            </VStack>
        </Box>
    </Center>;
};

// Export the default anonymous function
export default () => {
    // Return the JSX to render
    return (
        // Use the NativeBaseProvider for consistent styling across different platforms
        <NativeBaseProvider>
            // Use the Center component to center the Signup component
            <Center flex={1} px="3">
                // Render the Signup component
                <Signup />
            </Center>
        </NativeBaseProvider>
    );
};