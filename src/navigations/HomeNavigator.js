import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../screens";

const Stack = createNativeStackNavigator();

function HomeNavigator(props) {

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name='HomeScreen'  component={Home}/>
        </Stack.Navigator>
    );
}

export default HomeNavigator;