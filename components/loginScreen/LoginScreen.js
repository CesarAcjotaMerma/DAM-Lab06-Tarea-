import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, CheckBox, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) =>{
    return(
        <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
            <Text style={styles.text}>okta</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.lineas} />    
                <Image source={{uri:"https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"}} style={styles.imagen}/>
                <View style={styles.lineas} />
            </View>
            <View style={styles.login}>
                <Text style={styles.titulo}>Sign in</Text>
                <View>
                    <Text style={{fontSize:17, marginBottom: 3}}>Usename</Text>
                    <TextInput style={{borderWidth: 2, borderColor:"#a3d0e3", padding:4}}/>
                </View>
                <View>
                    <Text style={{fontSize:17, marginBottom: 3, marginTop: 5}}>Password</Text>
                    <TextInput style={{borderWidth: 2, borderColor:"#a3d0e3", padding:4}}/>
                </View>
                <View style={{flexDirection:"row", marginTop:26, marginBottom:20}}>
                    <CheckBox style={{fontSize:17, marginBottom: 3, marginTop: 5, marginLeft:0}}/>
                    <Text style={{fontSize:17, marginTop: 9, color: "#7f7f7f"}}>Remember me</Text>
                </View>
                <TouchableOpacity
                    style={styles.submit}
                    onPress={()=> navigation.navigate("Home")}      
                >
                    <Text style={{fontSize:20, color:"#fff", textAlign: "center"}}>Sign in</Text>
                </TouchableOpacity>
                <Text style={{fontSize:14, marginTop: 19, color: "#7f7f7f"}}>Need help signing is?</Text>
            </View>
        </View>
        </ScrollView>
    )
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
},
home: {
    alignItems: 'center',
},
login:{
    marginRight: "10%",
    marginLeft: "10%",
    flex: 4,
    width: "90%",
},
submit: {
    width: "100%",
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#067bc1",
    textAlign: "center"
},
titulo:{
    fontSize:20,
    marginTop: 25,
    textAlign:"center",
    marginBottom:27
},
lineas:{
    flex: 1, 
    height: 1, 
    backgroundColor: '#c5c5c5',
    width: 10
},
imagen:{
    width: 90,
    height: 90,
    marginRight:10,
    marginLeft: 10,
    borderRadius:90,

},
text:{
    fontSize:40,
    paddingTop: 40,
    flex: 0.6,
    color: "#067bc1",
    justifyContent: 'center',
    fontWeight: 'bold'}
});
export default LoginScreen