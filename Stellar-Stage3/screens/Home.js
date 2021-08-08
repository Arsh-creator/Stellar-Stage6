import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Image, ImageBackground, Platform, Touchable} from 'react-native';

export default class DailyPic extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <SafeAreaView style={styles.android} />
                <ImageBackground
                style={styles.backgroundImage}
                source= {require('../assets/stars.gif')}>
                <Image 
                style={styles.main}
                source={require('../assets/main-icon.png')}/>    
                <View>
                <Text style={styles.title}> Stellar App </Text>
                </View>
                <View style={{marginTop: 30}}>
                    <TouchableOpacity
                    style={styles.Buttons}
                    onPress={()=>{this.props.navigation.navigate('SpaceCrafts')}}>
                    <Image
                    style={styles.image} 
                    source={require('../assets/space_crafts.png')}/>    
                    <Text style={styles.text}> Space Crafts </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.Buttons}
                    onPress={()=>{this.props.navigation.navigate('StarMap')}}>
                    <Text style={styles.text}> Star Map </Text>  
                    <Image
                    style={styles.image} 
                    source={require('../assets/star_map.png')}/>    
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.Buttons} 
                    onPress={()=>{this.props.navigation.navigate('DailyPic')}}>
                    <Text style={styles.text}> Daily Pic </Text> 
                    <Image
                    style={styles.image} 
                    source={require('../assets/daily_pictures.png')}/>     
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main:{
        width: 200,
        height: 200,
        marginLeft: 580,
        resizeMode: 'contain'
    },
    android:{
        marginTop: Platform.OS === 'android'?StatusBar.currentHeight:0,
    },
    title:{
        flex: 0.15,
        color: '#FFFFFF',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: 30,
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover'
    },
    Buttons:{
        borderRadius: 60,
        color: '#FFC0CB',
        borderColor: 'black',
        borderWidth: 3,
        marginLeft: 580,
        marginTop: 20,
        width: 200,
        height:50
    },
    text:{
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        marginTop: 10,
        fontSize: 20,
        marginRight: 20,
    },
    image:{
        position: 'absolute',
        width: 50,
        height: 60,
        marginLeft: 150,
        marginTop: -20,
        resizeMode: 'contain'
    }
})