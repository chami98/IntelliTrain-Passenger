import React, { useState, useCallback, useEffect } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios'


const TimeTable = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const baseURL = 'https://9503-2407-c00-c003-73c1-6816-e291-d899-7673.ngrok-free.app/';
    const fetchData = () => {
        axios.get(`${baseURL}stations`).then(response => {
            const resData = response.data;
            const result = resData.map((item) => ({
                label: item.text,
                value: item.id
            }))
            setStations(result)
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        fetchData();
    }, [])

    const [startStationOpen, setStartStationOpen] = useState(false);
    const [endStationOpen, setEndStationOpen] = useState(false);
    const [startStationValue, setStartStationValue] = useState(null);
    const [endStationValue, setStationValue] = useState(null);
    const [stations, setStations] = useState([]);
    const [directTrains, setDirectTrains] = useState([]);

    const onStationOpen = useCallback(() => {
        setGenderOpen(false);
    }, []);

    const { control } = useForm();

    const handleSubmit = () => {
        navigation.navigate('TrainDetails', { "startStationValue": startStationValue, "endStationValue": endStationValue })
    }
    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Start Station *</Text>
                <Controller
                    name="startStation"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownCompany}>
                            <DropDownPicker
                                style={styles.dropdown}
                                open={startStationOpen}
                                value={startStationValue} //endStationValue
                                items={stations}
                                setOpen={setStartStationOpen}
                                setValue={setStartStationValue}
                                setItems={setStations}
                                placeholder="Select Start Station"
                                placeholderStyle={styles.placeholderStyles}
                                loading={loading}
                                activityIndicatorColor="#5188E3"
                                searchable={true}
                                searchPlaceholder="Search your station here..."
                                onOpen={onStationOpen}
                                onChangeValue={onChange}
                                zIndex={1000}
                                zIndexInverse={3000}
                            />
                        </View>
                    )}
                />
            </View>

            <View>
                <Text style={styles.label}>End Station</Text>
                <Controller
                    name="endStation"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <View style={styles.dropdownCompany}>
                            <DropDownPicker
                                style={styles.dropdown}
                                open={endStationOpen}
                                value={endStationValue} //endStationValue
                                items={stations}
                                setOpen={setEndStationOpen}
                                setValue={setStationValue}
                                setItems={setStations}
                                placeholder="Select End Station"
                                placeholderStyle={styles.placeholderStyles}
                                loading={loading}
                                activityIndicatorColor="#5188E3"
                                searchable={true}
                                searchPlaceholder="Search your station here..."
                                onOpen={onStationOpen}
                                onChangeValue={onChange}
                                zIndex={1000}
                                zIndexInverse={3000}
                            />
                        </View>
                    )}
                />
            </View>

            <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.getStarted}>SEARCH</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TimeTable

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderStyle: "solid",
        borderColor: "#B7B7B7",
        borderRadius: 7,
        borderWidth: 1,
        fontSize: 15,
        height: 50,
        marginHorizontal: 10,
        paddingStart: 10,
        marginBottom: 15,
    },
    label: {
        marginBottom: 7,
        marginStart: 10,
    },
    placeholderStyles: {
        color: "grey",
    },
    dropdownCompany: {
        marginHorizontal: 10,
        marginBottom: 200,
    },
    dropdown: {
        borderColor: "#B7B7B7",
        height: 50,
    },
    getStarted: {
        backgroundColor: "#5188E3",
        color: "white",
        textAlign: "center",
        marginHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: 20,
    },
    logIn: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 10,
    },
    links: {
        textAlign: "center",
        textDecorationLine: "underline",
        color: "#758580",
    },
});