import * as React from 'react';
import {Text, View, Image, StyleSheet, Alert, SafeAreaView, StatusBar, Platform, TouchableOpacity, Linking, ImageBackground, FlatList} from 'react-native';
import axios from 'axios';

export default class SpaceCrafts extends React.Component{

    constructor(props){
        super(props);
        this.state={
            aircrafts: {}
        }
    }

    getAircrafts=async()=>{
        axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
        .then(response =>{
            this.setState({
                aircrafts: response.results
            })
        })
    }

    componentDidMount(){
        this.getAircrafts();
    }

    renderItem=({item})=>{
        return(
            <View>
            <Image source={{uri: item.agency.image_url}}/>
                <Text>{item.name}</Text>
                <Text>{item.agency.name}</Text>
                <Text>DESCRIPTION</Text>
                <Text>{item.agency.description}</Text>
            </View>
        );
    }

    keyExtractor=({item, index})=> index.toString();

    render(){

        return(
            <View>
                <SafeAreaView style={styles.android}/>
                <View>
                <Text style={{
                  flex: 0.15,
                  color: '#000000',
                  justifyContent: 'center',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                  fontSize: 30
                }}>
                    Space Crafts
                </Text>
                </View>
                <View>
                    <FlatList 
                    data={this.state.aircrafts}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    android:{
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})