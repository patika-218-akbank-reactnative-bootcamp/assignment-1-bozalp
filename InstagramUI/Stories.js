import React from 'react';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import story_json from './jsons/story.json';

const Stories = () => {
    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={story_json}
                renderItem={({ item }) =>
                    <View style={styles.story}>
                        <View style={styles.image_area}>
                            {item.viewed ?
                                <Image source={{ uri: item.imageUrl }} style={styles.viewed_story} />
                                :
                                <View style={styles.unviewed_story}>
                                    <Image source={{ uri: item.imageUrl }} style={styles.viewed_story} />
                                </View>
                            }
                        </View>
                        <Text style={styles.username_text}>
                            {item.userName}
                        </Text>
                    </View>
                }
            />
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        story:
        {
            width: 90,
            height: 120,
            padding: 10,
            alignItems:'center'
        },
        image_area:
        {
            height:80
        },
        viewed_story:
        {
            width: 72,
            height: 72,
            borderRadius: 36,
        },
        unviewed_story:
        {
            width: 84,
            height: 84,
            borderRadius: 42,
            borderColor: 'red',
            borderWidth: 3,
            alignItems: 'center',
            justifyContent: 'center',
            top: -5
        },
        line:
        {
            borderBottomColor: '#dedede',
            borderBottomWidth: 2,
            width: '100%'
        },
        username_text:
        {
            fontSize: 12,
            color: 'black',
            textAlign: 'center',
        }
    }
)


export default Stories;
