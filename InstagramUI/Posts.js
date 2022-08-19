import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import post_json from './jsons/posts.json';
import Stories from './Stories';

const Posts = () => {
    return (
        <View>
            <FlatList
                ListHeaderComponent={<Stories />}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ marginBottom: 140 }} />}
                data={post_json}
                renderItem={({ item }) =>
                    <View>
                        <View style={styles.header}>
                            <Image source={{ uri: item.avatarImageUrl }} style={styles.avatar} />
                            <View style={styles.header_align}>
                                <Text style={styles.username_text}>
                                    {item.userName}
                                </Text>

                                <Image source={require('./Img/ellipsis-vertical.png')} style={styles.buttons} />
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: item.postImageUrl }} style={styles.post_image} />
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={styles.button_area}>
                                <View style={styles.left_buttons}>
                                    <Image source={require('./Img/heart.png')} style={styles.buttons} />
                                    <Image source={require('./Img/comment.png')} style={styles.buttons} />
                                    <Image source={require('./Img/paper-plane.png')} style={styles.buttons} />
                                </View>
                                <View>
                                    <Image source={require('./Img/bookmark.png')} style={styles.right_button} />
                                </View>
                            </View>
                            <Text style={styles.username_text}>
                                {item.numberOfLikes} likes
                            </Text>
                            <View style={styles.description_area}>
                                <View>
                                    <Text style={styles.username_text}>
                                        {item.userName}
                                    </Text>
                                </View>
                                <Text style={styles.description}>
                                    {item.description}
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.post_date}>
                                    {item.postDate}
                                </Text>
                            </View>
                        </View>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        header_align:
        {
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        header:
        {
            flex: 1,
            height: 56,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        avatar:
        {
            width: 36,
            height: 36,
            borderRadius: 18,
            margin: 10
        },
        description:
        {
            paddingLeft: 10,
            flex: 1
        },
        post_image:
        {
            width: '100%',
            height: 250,
        },
        username_text:
        {
            fontWeight: 'bold',
            textAlignVertical: 'center',
            color: 'black',
            fontSize: 14
        },
        post_date:
        {
            fontSize: 10
        },
        button_area:
        {
            height: 48,
            width: '100%',
            flexDirection: 'row',
            padding: 5,
            justifyContent: 'space-between',
        },
        left_buttons:
        {
            flexDirection: 'row',
        },
        buttons:
        {
            height: 26,
            width: 26,
            marginRight: 18,
            resizeMode: 'contain',
        },
        right_button:
        {
            height: 26,
            width: 26,
            resizeMode: 'contain',
        },
        description_area:
        {
            width: '100%',
            paddingBottom: 10,
            flexDirection: 'row'
        },
    }
)


export default Posts;
