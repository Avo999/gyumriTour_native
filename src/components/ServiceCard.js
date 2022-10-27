import { View, Text, Box } from 'native-base';
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



function ServiceCard(props) {
  return (
   <TouchableOpacity style={styles.cardContainer}>
        <Image 
            source={{
                uri: props.imgUrl
            }}
        />
        <View style={styles.cardBody}>
            <Text>{props.title}</Text>
            <Box style={{flexDirection: 'row'}}>
                <MaterialIcons name='star' size={20} color='orange'/>
                <Text >
                   <Text style={{color: '#ccc'}}>{props.rating}</Text>
                </Text>     
            </Box>
            <View style={{flexDirection:'row'}}>
                <MaterialIcons name='place' color='orange' size={20}/>
                <Text style={{color: '#ccc'}}>Nearby - {props.address}</Text>
            </View>
        </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginRight: 20,
        backgroundColor: 'white',
        width: 200
    },
    cardBody: {
        width: '100%',
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
    }
})

export default ServiceCard;