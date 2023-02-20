import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FormControl, Input, } from "native-base";
import { Formik } from 'formik';
import * as Yup from 'yup';

const CreditCardSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    number: Yup.string()
        .required('Card number is required')
        .matches(/^\d{16}$/, 'Card number must be 16 digits'),
    expiry: Yup.string()
        .required('Expiry date is required')
        .matches(/^\d{2}\/\d{2}$/, 'Expiry date must be in the format MM/YY'),
    cvc: Yup.string()
        .required('CVC is required')
        .matches(/^\d{3}$/, 'CVC must be 3 digits'),
    amount: Yup.number().required('Amount is required').min(0, 'Amount must be greater than or equal to 0'),
});

const CardDetails = ({ amount, setAmount }) => {
    return (
        <View >
            <Formik
                initialValues={{
                    amount: '',
                    name: '',
                    number: '',
                    expiry: '',
                    cvc: '',
                }}
                validationSchema={CreditCardSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <FormControl >
                            <Input placeholder="Amount"
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    // handleChange('amount');
                                    setAmount(text);
                                }}
                                onBlur={handleBlur('amount')}
                            />
                        </FormControl>
                        <FormControl mt="3">
                            <Input placeholder="Name on card"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name} />
                        </FormControl>
                        {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}
                        <FormControl mt="3">
                            <Input placeholder="Card number"
                                keyboardType="numeric"
                                onChangeText={handleChange('number')}
                                onBlur={handleBlur('number')}
                                value={values.number} />
                        </FormControl>
                        {errors.number && touched.number && <Text style={styles.error}>{errors.number}</Text>}
                        <FormControl mt="3" >
                            <Input placeholder="Expiry date (MM/YY)"
                                keyboardType="numeric"
                                onChangeText={handleChange('expiry')}
                                onBlur={handleBlur('expiry')}
                                value={values.expiry} />
                        </FormControl>
                        {errors.expiry && touched.expiry && <Text style={styles.error}>{errors.expiry}</Text>}

                        <FormControl mt="3">
                            <Input placeholder="CVC"
                                keyboardType="numeric"
                                onChangeText={handleChange('cvc')}
                                onBlur={handleBlur('cvc')}
                                value={values.cvc} />
                        </FormControl>
                        {errors.cvc && touched.cvc && <Text style={styles.error}>{errors.cvc}</Text>}
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default CardDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5
    }
})
