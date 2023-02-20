import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Modal, Center, NativeBaseProvider, FormControl, Input } from "native-base";
import CardDetails from './CardDetails';
import axios from 'axios';

const CreditCardModal = ({ showModal, setShowModal, fetchData, email }) => {

    const baseURL = 'https://us-central1-intellitrain-528b5.cloudfunctions.net/intelliTrain/';
    const [amount, setAmount] = useState();
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

    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Center>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
                                        setShowModal(false);
                                        console.log(amount);
                                        updateData();
                                    }}>
                                        PAY
                                    </Button>
                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </Center>
            </Center>
        </NativeBaseProvider>
    )
}

export default CreditCardModal

const styles = StyleSheet.create({})