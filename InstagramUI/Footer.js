import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
           <Image source={require('./Img/house.png')} style={styles.buttons} />
           <Image source={require('./Img/search.png')} style={styles.buttons} />
           <Image source={require('./Img/square-plus.png')} style={styles.buttons} />
           <Image source={require('./Img/comment.png')} style={styles.buttons} />
           <Image source={{uri:'https://avatars.githubusercontent.com/u/33182788'}} style={styles.avatar} />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container:
        {
            bottom:0,
            width:'100%',
            flexDirection:'row',
            backgroundColor:'white',
            height:54,
            position:'absolute',    
            padding:12,
            justifyContent:'space-between'
        },
        buttons:
        {
            width:24,
            height:24,
            marginLeft:10,
            marginRight:10,
        },
        avatar:
        {
            width:24,
            height:24,
            marginLeft:10,
            marginRight:10,
            borderRadius:12
        }
    }
)

export default Footer;
