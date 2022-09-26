import React from "react";
import { StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Box, Pressable, Flex, Text} from 'native-base';

function UserInfo ({icon,name , onPress}) {
    return(
        <Box alignItems="center">
      <Pressable maxW="96" onPress={onPress} style={styles.boxWrapper} >
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }} p="5" rounded="8" shadow={3} borderWidth="1" borderColor="coolGray.300">
              <Flex style={styles.flexContainer}>

                <MaterialIcons
                  name={icon}
                  size={30}
                  color='orange'
                  style={{alignSelf: 'center'}}
                />

                {isFocused ? <Text mt="2" fontSize={20} fontWeight="medium" textDecorationLine="underline" color="orange" alignSelf="flex-start">
                    {name}
                  </Text> : <Text mt="2" fontSize={20} style={{color: 'orange'}} fontWeight="medium" color="orange">
                    {name}
                  </Text>}
                {
                    isFocused ? (
                        <MaterialIcons 
                            name="add"
                            size={30}
                            color='orange'
                            alignSelf="flex-start"
                            // style={{alignSelf: 'center'}}
                        />
                    ) : (
                        <MaterialIcons 
                            name="add"
                            size={30}
                            color='orange'
                            style={{alignSelf: 'center', marginTop: 10 }}
                        />
                    )
                }

              </Flex>
            </Box>;
      }}
      </Pressable>
    </Box>
    )
}

const styles = StyleSheet.create({
    boxWrapper: {
        width: '90%',
        height: 80,
        marginBottom: 30,
    },
    flexContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default UserInfo;