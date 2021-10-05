import React from "react"
import {View, Text, StyleSheet,SafeAreaView,FlatList,TouchableOpacity, Image,} from "react-native"
import database from "../database"
import {createStackNavigator} from "@react-navigation/stack"
import Detalles from "../detailScreen/Detail"
import LogoTitle from "../MenuScreen/logo"

const Stack = createStackNavigator()

const HomeRoot = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
            options={{ 
              headerTitle: props => <LogoTitle main={true} {...props} />,
              // headerShown: false,
              headerLeft: null,
              headerTintColor: '#ffffff',
              headerStyle: {backgroundColor:"red"}}}/>

          <Stack.Screen name="Details" component={Detalles}
            options={{ 
              headerTitle: props => <LogoTitle main={false} {...props} />,
              headerTintColor: '#ffffff',
              headerStyle: {backgroundColor:"red"}}}/>
        </Stack.Navigator>
  )
}
const Item = ({ title,desc, imagen }) => (
  <View style={styles.item}>
  <Image
    style={styles.imagen}
    source={{uri: imagen}}/>
    <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{desc}</Text>
    </View>
  </View>
);
const separator = () =>{
  return(
    <View style={styles.separator}>
    </View>
  )
}
const HomeScreen = ({navigation}) =>{
    const cambiazo = (item) => {
        navigation.navigate("Details",{item: item})
        }
    return (
        <>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={database}
            keyExtractor={item=> item.id}
            ItemSeparatorComponent={separator}
            renderItem= {({item})=>(
                <TouchableOpacity style={styles.contenedor} onPress={()=>cambiazo(item)}>
                  <Item title={item.title} desc={item.description} imagen={item.imagen} style={styles.item} />
                </TouchableOpacity>
                
              )
            }
          />
          </SafeAreaView>
      </>
      );
  }

  const styles = StyleSheet.create({
    first: {
      backgroundColor: 'orange',
      padding: 15,
      margin: 3,
      fontSize: 42,
    },
    contenedor: {
      paddingBottom: 5,
      paddingTop: 5,
      margin: 1,
      fontSize: 222,
    },
    imagen: {
      width:80,
      height:80,
      marginStart: 10,
      marginEnd: 7,
      marginTop:13,
      borderRadius: 40
    },
    card: {
      flex:1,
      justifyContent: 'center'
    },
    item: {
      flexDirection:'row',
      flex: 1,
      fontSize: 222,
    },
    title: {
      fontSize: 22,
      marginStart: 10,
      justifyContent: 'center'
    },
    description: {
      fontSize: 13,
      marginStart: 10
    },
    separator:{
      height:1,
      width:"100%",
      backgroundColor: 'black'
    }
});
export default HomeRoot