import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Avatar } from "native-base";
import React, { useLayoutEffect } from "react";
import { View, Text } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



function ProfileInfoScreen(props){
    const navigation = useNavigation();
    const {params} = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Profile'
        })
    }, [])

    return (
        <Box  safeArea>
            <Box >            
                <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }}>
                        RB
                 </Avatar>
                <MaterialIcons 
                    name="border-color"
                    size={30}
                    color='orange'
                />
            </Box>
        </Box>
    )
}

export default ProfileInfoScreen;