import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function CustomInput({
                         label,
                         icon,
                         error,
                         password,
                         onFocus = () => {},
                         ...props
                     }) {

    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);



    return (
        <View style={{marginBottom: 20}}>
        <View style={[styles.container, {
            borderColor: error
                ? 'red'
                : isFocused
                    ? 'darkBlue'
                    : 'light',
            alignItems: 'center',
        },]}>
            {icon}
            <TextInput
                       style={[styles.input, {borderColor: error ? "red" : '#ccc' }]}
                       autoCorrect={false}
                       onFocus={() => {
                           onFocus();
                           setIsFocused(true);
                       }}
                       onBlur={() => setIsFocused(false)}
                       secureTextEntry={hidePassword}
                       {...props}
            />
            {password && (
                <Icon
                    onPress={() => setHidePassword(!hidePassword)}
                    name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                    style={{color: 'orange', fontSize: 22}}
                />
            )}

        </View>
            {error && (
                <Text style={{marginTop: 7, color: 'red', fontSize: 12}}>
                    {error}
                </Text>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    input: {
        flex: 1,
        paddingVertical: 0,
        color: 'black'
    },

})
export default CustomInput;