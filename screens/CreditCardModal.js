import { StyleSheet } from 'react-native'
import React from 'react'
import { Button, Modal, Center, NativeBaseProvider, FormControl, Input } from "native-base";
import CardDetails from './CardDetails';
const CreditCardModal = ({ showModal, setShowModal }) => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Center>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content maxWidth="400px">
                            <Modal.CloseButton />
                            <Modal.Header>TOP UP DIGITAL WALLET</Modal.Header>
                            <Modal.Body>
                                <FormControl >
                                    <Input placeholder="Amount"
                                        keyboardType="numeric" />
                                </FormControl>
                                <CardDetails />
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