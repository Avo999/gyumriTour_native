import React, {useCallback, useLayoutEffect, useEffect} from 'react';
import {View, Text, StyleSheet } from "react-native";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../components/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import { fetchProfile, signOut } from "../store/actions/userActions";
import {RefreshControl, ScrollView} from "react-native-gesture-handler";
import {Avatar, Box, Heading} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import UserInfo from '../components/UserInfo';


const profileImage = '../assets/images/blank-profile-picture-973460__340.webp'

function Account(props) {
    const navigation = useNavigation();
    const user = useSelector(state => state.user.user.user);
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const loading = useSelector(state => state.user.loading);

    const handleLogOut = useCallback(async () => {
            dispatch(signOut())
            await AsyncStorage.removeItem('token');
            navigation.navigate('Login')
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, 
        })
    }, [])


    useEffect(() => {
        (async() => {
             return dispatch(fetchProfile())
        })()
    },[])


    const handlePress = useCallback((val, params) => {
        navigation.navigate(val, params)
    }, [])

   const handleRefresh = useCallback(() => {
      dispatch(fetchProfile())
   }, [])

   

    return (
            
            <ScrollView  
                refreshControl={<RefreshControl refreshing={loading} onRefresh={handleRefresh}/> }
             >
                <Box safeAreaTop="8" style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>

               
                <Box style={{marginLeft: 20}}>

                    <Heading size='xl'>
                        Profile
                    </Heading>
                </Box>
                <Box style={styles.profileHeader}>

                    <Avatar bg="purple.600" alignSelf="center" size="xl" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        RB
                    </Avatar>
                    <View style={{width: 250 ,flexDirection: 'row' , justifyContent: 'space-between'}}>
                      <View style={ styles.profileName }>

                        { loading || user === undefined ? (
                            <Text>loading</Text>
                        ): (
                            <>
                            <Heading size='xl'>{user.firstName}</Heading>
                        <Heading size='lg'>{user.lastName}</Heading>    
                            </>
                        )}
                                            
                      </View>
                      <MaterialIcons
                        name='edit'
                        size={30}
                        color='orange'
                        style={{alignSelf: 'center'}}
                        onPress={() => navigation.navigate('ProfileInfoScreen', user)}
                        />
                    </View>
                </Box>

                    <Box >
                       <UserInfo icon='account-circle' name='Contacts Information' onPress={() => handlePress("ProfileInfoScreen",user)} />
                       <UserInfo icon='favorite' name='Favorite Places' onPress={() => handlePress('FavoritePlaces')} />
                       <UserInfo icon='location-city' name='Add Sightseeing' onPress={() => handlePress('CreateSightSeeing')}/>
                    </Box>  
                   
               <Box style={{paddingLeft: 50, paddingRight: 50}}>
                 <CustomButton label='Log out' onPress={handleLogOut}/>
             </Box>         
                </Box>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    profileHeader: {
        paddingTop: 25,
        paddingLeft: 30,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 50
    },
    profileName: {
        alignSelf: 'center',
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
        
}
})

export default Account;