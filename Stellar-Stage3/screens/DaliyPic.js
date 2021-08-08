import * as React from 'react';
import {Text, View, Image, StyleSheet, Alert, SafeAreaView, StatusBar, Platform, TouchableOpacity, Linking, ImageBackground} from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component{
    constructor(props){
        super(props);
        this.state={
            apod: {}
        }
    }

    getApod=async()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=bk6Y9jeXfGGwL2pGTU9z2DZWYSXZKJhaoDz0PIYQ')
        .then(response =>{
            this.setState({
                apod: response.data
            })
        })
        .catch(error =>{
            Alert.alert(error.message)
        })
    }

    componentDidMount(){
        this.getApod();   
    }

    render(){
        return(
            <View style={{flex:1}}>
                <SafeAreaView style={styles.android} />
                <ImageBackground
                style={styles.background}
                source={require('../assets/space.gif')}>
                <Text style={styles.title}>
                    Daily Pic!
                </Text>
                <View>
                    <TouchableOpacity
                    style={{borderRadius: 50, borderWidth: 5}}
                    onPress={()=>Linking.openURL(this.state.apod.url).catch(er => console.error("Couldn't load page".er))}>
                        <Image 
                        style={{width: 50, height: 50, borderRadius: 50}}
                        source={require('../assets/play-video.png')}/>
                        <Text style={{position: 'absolute', fontSize: 20}}> Click To Load URL </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.explanations}> {this.state.apod.explanation} </Text>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    android:{
        marginTop: Platform.OS === 'android' ?StatusBar.currentHeight:0
    },
    title:{
        flex: 0.15,
        color: '#000000',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: 30,
        marginBottom: 30
      },   
      background:{
        resizeMode: 'cover',
        width: '100%',
        height: '100%' 
      },
      explanations:{
          fontFamily: 'BubbleGum-Sans',
          fontSize: 20
      }
})