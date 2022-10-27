import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Dimensions, FlatList} from "react-native";
import Wrapper from "../components/Wrapper";
import {useNavigation} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import Swiper from 'react-native-swiper';
import FeaturedRaw from '../components/FeaturedRaw';

const {width} = Dimensions.get('window');

const filters = [
  {name: 'Hotels', id: 1, rating: 4, address: 'Sayat Nova'},
  {name: 'Restourants', id: 2, rating: 4, address: 'Sayat Nova'},
  {name: 'Sightseeings', id: 3, rating: 4, address: 'Sayat Nova'},
  {name: 'Cafes', id: 4, rating: 4, address: 'Sayat Nova'},
  {name: 'Guides', id: 5, rating: 4, address: 'Sayat Nova'}
]
function Home(props) {
    const navigation = useNavigation();
    
    return (
        <Wrapper>
            <ScrollView >
            <View style={styles.wrapper}> 
             <View style={styles.swiper}>
                <Swiper autoplay style={{height: width / 2}} showsButtons={false}>
                   <View style={styles.slide1}>
                      <Text style={styles.text}>Hello Swiper</Text>
                   </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                  <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                  </View>
               </Swiper>
               <View style={{height: 20}}></View>
             </View>
             <View style={{paddingLeft: 20, paddingRight: 20}}>
                <ScrollView 
                  horizontal
                  
                >
                  {
                    filters.map(item => (
                      <TouchableOpacity key={item.id} style={styles.filterButtonStyles} >
                         <Text style={{color: 'white'}}>{item.name}</Text>
                      </TouchableOpacity>
                    ))
                  }
                </ScrollView>

                  <FeaturedRaw title='SightSeeing List' data={filters}/>

             </View>
             
            </View>
            </ScrollView>
        </Wrapper>
    );
}
const styles = StyleSheet.create({
    wrapper: {
       flex: 1,
       backgroundColor: '#f8f8f8'
    },
    swiper: {
      width: width,
      alignItems: 'center',
      marginTop: 20,
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    filterButtonStyles:{
      width: 'auto', 
      height: 30,
      backgroundColor: 'orange', 
      marginRight: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 4,
      paddingRight: 4,
      borderRadius: 5

    }

})

export default Home;