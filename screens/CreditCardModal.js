import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from "native-base";
const CreditCardModal = ({ showModal, setShowModal }) => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Center>
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content maxWidth="400px">
                            <Modal.CloseButton />
                            <Modal.Header>Contact Us</Modal.Header>
                            <Modal.Body>
                                <FormControl>
                                    <FormControl.Label>Name</FormControl.Label>
                                    <Input />
                                </FormControl>
                                <FormControl mt="3">
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input />
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
                                        Save
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