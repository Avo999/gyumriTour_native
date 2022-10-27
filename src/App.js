import React, {useEffect} from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import store from './store'
import Navigation from "./Navigation";
import {Alert, BackHandler} from "react-native";
import {NativeBaseProvider} from "native-base";



function App(props) {
    
    
    useEffect(() => {
        const listener = BackHandler.addEventListener('back', function () {

            Alert.alert('Exit', 'Are you sure?', [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'ok',
                    onPress: () => {
                        BackHandler.exitApp()
                    }
                }
            ])

            return true
        })

        return () => {
            listener.remove()
        };
    }, [])

    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </NativeBaseProvider>
        </Provider>
    );
}

export default App;