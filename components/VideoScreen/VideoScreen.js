import React from "react"
import {View, Text, StyleSheet,SafeAreaView,FlatList,TouchableOpacity, Image,Button} from "react-native"
import {createStackNavigator} from "@react-navigation/stack"
import { Video, AVPlaybackStatus } from 'expo-av';

const Stack = createStackNavigator()

const VideoM = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Video" component={Movie}
            options={{ 
            //   headerTitle: props => <LogoTitle main={true} {...props} />,
              // headerShown: false,
            //   headerLeft: null,
              headerTintColor: '#ffffff',
              headerStyle: {backgroundColor:"red"}}}/>
        </Stack.Navigator>
    )
}

const Movie = ({navigation, route}) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return(
        <View style={styles.container}>
            <Video
            ref={video}
            style={styles.video}
            source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button style={styles.buttons}
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#34495E',
  },
  video: {
    alignSelf: 'center',
    width: 450,
    height: 200,
  },
  buttons: {
    margin: 18,
  },
});

export default VideoM