import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={require('./Img/Instagram_logo.png')} style={styles.logo} />
            <View style={styles.right_buttons}>
                <Image source={require('./Img/paper-plane.png')} style={styles.buttons} />
                <Image source={require('./Img/heart.png')} style={styles.buttons} />
                <Image source={require('./Img/square-plus.png')} style={styles.buttons} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        header:
        {
            width: '100%',
            height: 72,
            flexDirection: 'row',
            padding: 10,
        },
        logo:
        {
            flex: 1.2,
            height: 64,
            resizeMode: 'contain',
        },
        right_buttons:
        {
            flex: 2,
            height: 72,
            flexDirection: 'row-reverse',
        },
        buttons:
        {
            width: 26,
            height: 26,
            //backgroundColor: 'green',
            margin: 10,
            marginTop: 15,
            resizeMode: 'contain',
        }
    }
)

export default Header;
