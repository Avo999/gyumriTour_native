import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Keyboard} from "react-native";
import CustomInput from "../components/CustomInput";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import {useDispatch, useSelector} from "react-redux";
import {fetchSignUp} from "../store/actions/userActions";
import _ from "lodash";
import {useNavigation} from "@react-navigation/native";


function RegisterScreen(props) {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const token = useSelector(state => state.user.token);
    const navigation = useNavigation();
    const error = useSelector(state => state.user.error)



    useEffect(  () => {
        (async () => {
            if (token){
                navigation.navigate('Account')
            }

            if (!_.isEmpty(error)){
                handleError(error.err, error.path)
            }
        })()

    }, [ token, error])

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };


    const handlePressSubmit = useCallback(() => {
        Keyboard.dismiss()

        console.log(inputs)
        dispatch(fetchSignUp(inputs));

    }, [inputs])
    return (
        <KeyboardAvoidingView style={styles.container}
                              behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View>
                <Text style={styles.logIn}>
                    Sign Up
                </Text>
                <CustomInput placeholder={'Name'}
                             onFocus={() => handleError(null, 'name')}
                             onChangeText={text => handleOnchange(text, 'firstName')}
                             keyboardType="email-address"
                             error={errors.name}
                             icon={
                                 <MaterialIcons
                                     name="person-outline"
                                     size={20}
                                     color="orange"
                                     style={{marginRight: 5}}
                                 />
                             }
                />
                <CustomInput placeholder={'Last Name'}
                             onChangeText={text => handleOnchange(text, 'lastName')}
                             onFocus={() => handleError(null, 'lastName')}
                             keyboardType="email-address"
                             error={errors.lastName}
                             icon={
                                 <MaterialIcons
                                     name="person-outline"
                                     size={20}
                                     color="orange"
                                     style={{marginRight: 5}}
                                 />
                             }
                />
                <CustomInput placeholder={'Email'}
                             keyboardType="email-address"
                             onChangeText={text => handleOnchange(text, 'email')}
                             onFocus={() => handleError(null, 'email')}
                             error={errors.email}
                             icon={
                                 <MaterialIcons
                                     name="alternate-email"
                                     size={20}
                                     color="orange"
                                     style={{marginRight: 5}}
                                 />
                             }
                />
                <CustomInput placeholder={'Password'}
                             onChangeText={text => handleOnchange(text, 'password')}
                             onFocus={() => handleError(null, 'password')}
                             error={errors.password}
                             password
                             icon={
                                 <Ionicons
                                     name="ios-lock-closed-outline"
                                     size={20}
                                     color="orange"
                                     style={{marginRight: 5}}

                                 />
                             }
                />
                <CustomButton label={"Sign Up"} onPress={handlePressSubmit}/>
                <Text style={{textAlign: 'center', color: 'orange', marginBottom: 30}}>
                    Or, sign up with ...
                </Text>
                <View
                    style={styles.altLogContainer}>
                    <TouchableOpacity
                        onPress={() => {

                        }}
                        style={styles.altLogBtn}>
                        <GoogleSVG height={24} width={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                        }}
                        style={styles.altLogBtn}>
                        <FacebookSVG height={24} width={24}/>
                    </TouchableOpacity>

                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
    },
    logIn: {
        fontFamily: 'Roboto-Medium',
        fontSize: 28,
        fontWeight: '500',
        color: 'orange',
        marginBottom: 30,
    },
    altLogContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    altLogBtn: {
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    }
})

export default RegisterScreen;