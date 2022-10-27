import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Avatar, Center } from "native-base";
import React, { useLayoutEffect, useCallback, useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EditInput from "../components/EditInput";
import CustomButton from '../components/CustomButton'
import { fetchUpdateUser } from "../store/actions/userActions";
import _ from 'lodash';
import CustomAlert from "../components/CustomAlert";

function ProfileInfoScreen(props){
    const {params} = useRoute();
    const [inputs, setInputs] = useState({firstName: params.firstName, lastName: params.lastName, email: params.email})
    const navigation = useNavigation();
    const [errors,  setErrors] = useState({});
    const dispatch = useDispatch()
    const error = useSelector(state => state.user.error);
    const status = useSelector(state => state.user.status);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Profile'
        })
    }, [])

    useEffect(() => {
        if(!_.isEmpty(error)) {
            handleError(error.err, error.path)
        }
    },[error])

    const handleChangeText = useCallback((text, input) => {
        setInputs(prev => ({...prev, [input]: text}))
    }, [inputs])


    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };

    const handlePressSubmit = useCallback(async() => {
        Keyboard.dismiss();

        await dispatch(fetchUpdateUser(inputs));
       
        
            <Center flex={1} px="3">
                <CustomAlert status={status} mesagge={status} />
            </Center>
        
    }, [inputs, status])
    return (
        <KeyboardAvoidingView  safeArea style={styles.editContainer} >
            <Box safeArea>
            <Box style={{position: 'relative'}}>            
                <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        RB
                 </Avatar>
             <Box style={styles.editIcon}>
                <MaterialIcons 
                    name="drive-file-rename-outline"
                    size={30}
                    color='white'
                />
             </Box>
            </Box>

           <Box style={styles.inputs}>
                 <EditInput 
                  onFocus={() => handleError(null, 'firstName')}
                  error={errors.firstName}
                 value={inputs.firstName} name='first name' placeholder="first name" onChangeText={(text) => handleChangeText(text, 'firstName')}/>
                 <EditInput 
                     onFocus={() => handleError(null, 'lastName')}
                     error={errors.lastName}
                 value={inputs.lastName} name='last name' placeholder="last name" onChangeText={text => handleChangeText(text, 'lastName')}/>
                 <EditInput 
                     onFocus={() => handleError(null, 'email')}
                     error={errors.email}
                 value={inputs.email} name='email' placeholder="Email" onChangeText={text => handleChangeText(text, 'email')}/>
            </Box> 
            <Box style={styles.buttonContainer}>
                 <CustomButton label='Save' onPress={handlePressSubmit}/>
            </Box>
            </Box>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    editContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputs:{
        display: 'flex',
        flexDirection: 'column',
    },
    buttonContainer: {
        paddingLeft: 50,
        paddingRight: 50
    },
    editIcon : {
        width: 30,
        height: 30,
        backgroundColor: 'orange',
        position: 'absolute', 
        right: 139,
        bottom: 0,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProfileInfoScreen;