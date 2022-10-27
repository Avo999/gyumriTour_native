import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Box, FlatList } from 'native-base';
import React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ServiceCard from './ServiceCard';


function FeaturedRaw({title, data}) {
  return (
    <Box>
      <View style={styles.titleContainer}> 
         <Text>{title}</Text>
         <MaterialIcons name='trending-flat' size={20} color='orange'/>
      </View>
      <FlatList
        horizontal
        // contentContainerStyle={{paddingHorizontal: 15}}
        data={data} renderItem={({item}) => <ServiceCard 
        imgUrl='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
        title={item.name}
        rating={item.rating}
        address={item.address}
        /> }
      />

    </Box>
  )
}


const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginBottom: 15,
        marginTop: 15
    }
});

export default FeaturedRaw;

