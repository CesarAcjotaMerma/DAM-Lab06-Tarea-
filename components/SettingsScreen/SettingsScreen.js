import React from 'react';
import {View, Text, StyleSheet,SafeAreaView,FlatList,TouchableOpacity, Image,} from "react-native"
import {createStackNavigator} from "@react-navigation/stack"
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 

const elements = [
    {
        title: "Account",
        icon: "person-outline",
        id: 1
    },
    {
        title: "Notifications",
        icon: "notifications-outline",
        id: 2
    },
    {
        title: "Appearance",
        icon: "eye-outline",
        id: 3
    },
    {
        title: "Privacy & Security",
        icon: "lock-closed-outline",
        id: 4
    },
    {
        title: "Help and Support",
        icon: "headset-outline",
        id: 5
    },
    {
        title: "About",
        icon: "help-circle-outline",
        id: 6
    },
]

const Stack = createStackNavigator()
const VideoM = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="settings" component={Movie}
            options={{ 
            //   headerTitle: props => <LogoTitle main={true} {...props} />,
              headerShown: false,
            //   headerLeft: null,
              headerTintColor: '#ffffff',
              headerStyle: {backgroundColor:"red"}}}/>
        </Stack.Navigator>
    )
}
const separator = () =>{
    return(
      <View style={styles.separator}>
      </View>
    )
  }

const Item = ({ title, imagen }) => (
    <View style={styles.item}>

      <View style={styles.card2}>
      <Ionicons name={imagen} size={18} color="black" style={{marginTop:7}}/>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward" size={18} color="black" style={{flex: 1, marginTop:7}} />
      </View>
    </View>
  );
const Movie = () => {

    return(
<View style={[styles.card, styles.elevation]}>

          <Text style={styles.heading}>
            Settings
          </Text>
          <TextInput style={styles.input} placeholder={"    Search"}/>
          <SafeAreaView style={styles.container}>
          <FlatList
            data={elements}
            keyExtractor={item=> item.id.toString()}
            ItemSeparatorComponent={separator}
            renderItem= {({item})=>(
                <TouchableOpacity style={styles.contenedor}>
                  <Item title={item.title} imagen={item.icon} style={styles.item} />
                </TouchableOpacity>
                
              )
            }
          />
          </SafeAreaView>
</View>
    )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 13,
      textAlign: 'center'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 35,
      paddingHorizontal: 25,
      width: '90%',
      height: '90%',
      marginVertical: 35,
      alignSelf: 'center'
    },
    elevation: {
      elevation: 20,
      shadowColor: '#52006A',
    },
    input:{
        backgroundColor: '#e2e2e2',
        marginTop: 20,
        borderRadius:10
    },
    title: {
        fontSize: 15,
        marginStart: 20,
        marginBottom: 7,
        marginTop: 7,
        flex: 8,
        fontWeight: '200',
        justifyContent: 'center'
      },
      card2: {
        flex:1,
        // justifyContent: 'center',
        flexDirection: 'row'
      },
    contenedor: {
        paddingBottom: 5,
        paddingTop: 5,
        margin: 1,
      },
    container: {
        marginTop:30
    },
    item: {
        flexDirection:'row',
        flex: 1,
    },
    separator:{
        height:1,
        width:"100%",
        backgroundColor: '#e2e2e2'
    }
  });
export default VideoM