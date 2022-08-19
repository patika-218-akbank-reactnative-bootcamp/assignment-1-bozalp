import React from 'react';
import { Text, View } from 'react-native';

import Header from './Header';
import Posts from './Posts';
import Footer from './Footer';

const Instagram = () => {
    return (
        <View style={{flex:1}}>
            <Header />
            <Posts />
            <Footer />
        </View>
    );
};

export default Instagram;
