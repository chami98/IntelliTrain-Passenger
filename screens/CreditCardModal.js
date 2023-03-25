import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Button, Modal, Center, NativeBaseProvider } from "native-base";
import CardDetails from './CardDetails';
import axios from 'axios';
import Example from './Example';

const CreditCardModal = ({ showModal, setShowModal, fetchData, email }) => {

    const baseURL = 'https://us-central1-intellitrain-528b5.cloudfunctions.net/intelliTrain/';
    const [amount, setAmount] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const data = {
        "email": email,
        "topUp": Number(amount)
    }
    const updateData = () => {
        axios.put(`${baseURL}wallet`, data).then(response => {
            console.log(response.data);
            fetchData();
        }).catch(error => {
            console.log(error);
        })
    }
    const handlePress = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowModal(false);
        }, 4000)
    }

    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Center>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>

                        {isLoading ? (
                            <Example />
                        ) : (
                            <Modal.Content maxWidth="400px">
                                <Modal.CloseButton />
                                <Modal.Header>TOP UP DIGITAL WALLET</Modal.Header>

                                <Modal.Body>

                                    <CardDetails amount={amount} setAmount={setAmount} />

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                            setShowModal(false);
                                        }}>
                                            Cancel
                                        </Button>
                                        <Button onPress={() => {
                                            handlePress();
                                            console.log(amount);
                                            updateData();
                                        }}>
                                            PAY
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        )}

                    </Modal>
                </Center>
            </Center>
        </NativeBaseProvider>
    )
}

export default CreditCardModal

const styles = StyleSheet.create({})