import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Keyboard, KeyboardAvoidingView} from "react-native";
import CustomInput from "../components/CustomInput";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import {useDispatch, useSelector} from "react-redux";
import {fetchLogIn} from "../store/actions/userActions";
import _ from 'lodash'
import ForgotComponent from '../components/ForgotComponent'


function LogInScreen(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const error = useSelector(state => state.user.error);

    const [inputs, setInputs] = useState({email: '', password: ''});
    const [errors,  setErrors] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [modalVisible, setModalVisible] = React.useState(false);


    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };

    useEffect(() => {
        (async () => {
            if (token) {
                navigation.navigate('HomeScreen')
            }

            if (!_.isEmpty(error)) {
                handleError(error.err, error.path)
            }

        })()

    }, [token, error])

    const handlePressSubmit = useCallback(() => {
        Keyboard.dismiss()

        dispatch(fetchLogIn(inputs));
        // navigation.navigate('HomeScreen')

    }, [inputs])

        GoogleSignin.configure({
             webClientId: '743433428737-mhkovao472nhnmukhj6ifsafp7fovuep.apps.googleusercontent.com',
        });


    const handleGoogleSignIn = useCallback(async() => {
        const {idToken, user} = await GoogleSignin.signIn();

        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        const userSignIn =  auth().signInWithCredential(googleCredential);
        
        
        
        // userSignIn.then(user => {
        //     setUserInfo(user)
        // }).catch(err => {
        //     console.log(err);
        // })
        
    }, []);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View>

                <Text style={styles.logIn}>
                    Log In
                </Text>

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

                {error && error.path === null ? (
                    <Text style={{marginTop: 7, color: 'red', fontSize: 12}}>
                        {error.err}
                    </Text>
                ) : null}

                <CustomButton label={"Login"} onPress={handlePressSubmit}/>

                <Text style={{textAlign: 'center', color: 'orange', marginBottom: 30}}>
                    Or, login with ...
                </Text>

                <View
                    style={styles.altLogContainer}>
                    <TouchableOpacity
                        onPress={ handleGoogleSignIn }
                        style={styles.altLogBtn}>
                        <GoogleSVG height={24} width={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.altLogBtn}>
                        <FacebookSVG height={24} width={24}/>
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{color: 'orange', fontWeight: '700'}}> Register</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 30,
                    }}>
                        <ForgotComponent isOpen={modalVisible} setModalVisible={setModalVisible}/>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{color: 'orange', fontWeight: '700'}}> Forgot?</Text>
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

export default LogInScreen;