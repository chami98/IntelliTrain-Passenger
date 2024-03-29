import { Alert, StyleSheet, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from '../config/firebaseConfig';
import { Box, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Signed In')
                let email = userCredential.user.email;
                let user = userCredential.user;
                console.log(userCredential.user.accessToken)
                navigation.navigate('AppTabNavigator', { "email": email, "user": user })
                // navigation.navigate('HomeNavigator', { screen: 'HomeNavigator' });
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })
    }

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={require('../assets/login2.gif')
                        }
                    /></View>
                <Box safeArea p="0" py="0" w="90%" maxW="290">
                    <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }}>
                        Welcome
                    </Heading>
                    <Heading mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="coolGray.600" fontWeight="medium" size="xs">
                        Sign in to continue!
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Email ID</FormControl.Label>
                            <Input onChangeText={(text) => setEmail(text)} />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Password</FormControl.Label>
                            <Input onChangeText={(text) => setPassword(text)} type="password" />
                            <Link _text={{
                                fontSize: "xs",
                                fontWeight: "500",
                                color: "indigo.500"
                            }} alignSelf="flex-end" mt="1">
                                Forget Password?
                            </Link>
                        </FormControl>
                        <Button onPress={handleSignIn} mt="2" colorScheme="indigo">
                            Sign in
                        </Button>
                        <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                I'm a new user.{" "}
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={{ color: 'blue' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </HStack>
                    </VStack>
                </Box>
            </View>
        </NativeBaseProvider>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40

    }, button: {
        backgroundColor: '#0782f9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'

    }, buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2
    }, buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16
    }, image: {
        height: 270,
        width: 270,
    }, imageView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -35,
    },
})