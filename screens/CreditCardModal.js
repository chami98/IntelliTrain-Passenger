import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider, Stack, VStack } from "native-base";
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
                                    <Input placeholder='AMOUNT' keyboardType='numeric' />
                                </FormControl>
                                <FormControl mt="3">
                                    <Input placeholder='CARD NUMBER' keyboardType='numeric' />
                                </FormControl>
                                <FormControl mt="3">
                                    <Input placeholder='EXPIRY' keyboardType='numeric' />
                                </FormControl>
                                <FormControl mt="3">
                                    <Input placeholder='CVC' keyboardType='numeric' />
                                </FormControl>
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