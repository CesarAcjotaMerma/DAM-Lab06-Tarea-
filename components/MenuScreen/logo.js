import React from "react"
import {View, Text, StyleSheet} from "react-native"
import { Entypo } from '@expo/vector-icons';
import {
    useFonts,
    Marvel_400Regular,
    Marvel_700Bold,
  } from '@expo-google-fonts/marvel';
import {
    Caveat_600SemiBold,
    Caveat_700Bold,
  } from '@expo-google-fonts/caveat';
  
const Logo = ({main}) => {
    let [fontsLoaded] = useFonts({
        Marvel_400Regular,
        Marvel_700Bold,
        Caveat_600SemiBold,
        Caveat_700Bold,
      });
      console.log(main)
      
    if (!fontsLoaded) {
        return <Text>Hola</Text>
    }else{
  return(
    <View style={{flexDirection:"row", margin:0}}>
        {main ? <>
        <View style={styles.element}>
            <Entypo name="home" size={24} color="white" />
        </View>
        <View style={styles.element}>
            <Text style={styles.text}>SIXTIES</Text>
        </View>
        <View style={styles.element}>
            <Text style={styles.text2}>MARVEL</Text>
        </View></>
        :
        <View style={styles.element2}>
            <Text style={styles.text2}>MARVEL</Text>
        </View>
        }
        
    </View>
  )}
}
const styles = StyleSheet.create({
    element: {
        color: "#fff",
        width:"33%",
        textAlign: "center",
        borderColor: "black",
    },
    element2: {
        color: "#fff",
        width:"100%",
        textAlign: "center",
        borderColor: "black",
    },
    text:{
        color: "#fff",
        fontSize: 23, 
        fontFamily: 'Caveat_700Bold',
    },
    text2:{
        color: "#fff",
        fontSize: 28,
        fontFamily: 'Marvel_400Regular',
        textAlign: "right"
    }
})
export default Logo