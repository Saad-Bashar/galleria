import React from 'react'
import { View, FlatList, ImageBackground, Image, useWindowDimensions, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import data from '../../data.json'
import { colors, spacing } from '../theme'
import AutoHeightImage from 'react-native-auto-height-image';
import Text from '../components/text/text'
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationProp } from '@react-navigation/core'
import { SharedElement } from 'react-navigation-shared-element';
import GalleriaHeader from '../components/galleria-header'
import { DATA } from '../../DATA'
export default function Home({ navigation } : {navigation: NavigationProp<any> }) {
    const { width } = useWindowDimensions();
    const renderItem = ({ item } : {item:any}) => {
        return (
            <Pressable onPress={() => navigation.navigate("Details", {id: item.id})}>
              <SharedElement id={`item.${item.id}.photo`}>
                <AutoHeightImage
                    width={width - spacing[6]}
                    source={item.images.gallery}
                    style={[{alignSelf: 'center', marginBottom: spacing[2]}]}
                />
                </SharedElement>
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={{ position: 'absolute', bottom: 10, left: -15, right: -15,  }}>
                    <View style={{ paddingVertical: spacing[5], paddingHorizontal: spacing[6], width: 250 }}>
                        <Text preset="h3" textColor="white">{item.name}</Text>
                        <Text preset="subhead2" textColor="white" style={[{ marginTop: spacing[1]}]}>{item.artist.name}</Text>
                    </View>
                </LinearGradient>
            </Pressable>
          
        ) 
    }
    return (
        <SafeAreaView>
            <GalleriaHeader label="START SLIDESHOW" onPress={() => navigation.navigate("Details", {id: 1})} />
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ paddingHorizontal: spacing[6], paddingVertical: spacing[4] }}
            />
        </SafeAreaView>
    )
}
