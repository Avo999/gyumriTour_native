import React from 'react';
import {Box, Stack,Input, Heading, Text } from 'native-base';

function EditInput (props) {
    return (

     <Stack space={4} w="75%" maxW="300px" mx="auto" style={{marginBottom: 20}}>
        <Heading >
            {props.name}
        </Heading>
        <Input 
          value={props.value} 
          size="lg"
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
          onFocus={props.onFocus}
         />
         <Text color='red.500'>{props.error}</Text>
    </Stack>
    )
}

export default EditInput; 