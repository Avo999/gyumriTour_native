import React from 'react';
import { StatusBar } from "react-native";

function Wrapper(props) {
    return (
        <>
            <StatusBar translucent barStyle="dark-content" backgroundColor="rgba(0, 0, 0, 0.2)" animated />
            {props.children}
        </>
    );
}

export default Wrapper;
