import React, {useEffect, useState} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AccountNavigator, HomeNavigator} from './navigations'
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setToken} from "./store/actions/userActions";
import { flatMap } from 'lodash';


const Tab = createBottomTabNavigator();

function App(props) {
    const [appReady, setAppReady] = useState(true);
    const token = useSelector(store => store.user.token);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const t = await AsyncStorage.getItem('token');
            await dispatch(setToken(t));
             setAppReady(false);
            // SplashScrren.hide();
        })()
    }, [])

   

    if (appReady) {
        return null
    }

    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => {
                    return <MaterialIcons name='home' color={color} size={size}/>
                }
            }}
                        name="Home" component={HomeNavigator}/>

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        return <MaterialIcons name='person' color={color} size={size}/>
                    }
                }}
                name="Account" component={AccountNavigator}/>
        </Tab.Navigator>
    );
}

export default App;