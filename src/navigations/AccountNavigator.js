import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Account, LogInScreen} from '../screens';
import RegisterScreen from "../screens/RegisterScreen";
import {useSelector} from "react-redux";
import ProfileInfoScreen from '../screens/ProfileInfoScreen';
import FavoritePlaces from '../screens/FavoritePlaces';
import CreateSightSeeing from '../screens/CreateSightSeeing'

const Stack = createNativeStackNavigator();

function AccountNavigator(props) {

    const token = useSelector(state => state.user.token)

    return (
            <Stack.Navigator
                screenOptions={{
                headerTitleAlign: 'center',
            }}>
                {token ? (
                    <>
                     <Stack.Screen name="AccountScreen" component={Account}/>
                     <Stack.Screen name='ProfileInfoScreen' component={ProfileInfoScreen}/> 
                     <Stack.Screen name='FavoritePlaces' component={FavoritePlaces}/>
                     <Stack.Screen name='CreateSightSeeing' component={CreateSightSeeing}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen name='Login' component={LogInScreen}/>
                        <Stack.Screen name="Register" component={RegisterScreen}/>
                    </>
                    )}

            </Stack.Navigator>
    );
}

export default AccountNavigator;