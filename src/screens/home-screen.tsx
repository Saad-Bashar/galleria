import React from 'react'
import { View, FlatList,SafeAreaView, useWindowDimensions, StyleSheet, Pressable } from 'react-native'
import { spacing } from '../theme'
import AutoHeightImage from 'react-native-auto-height-image';
import Text from '../components/text/text'
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationProp } from '@react-navigation/core'
import { SharedElement } from 'react-navigation-shared-element';
import GalleriaHeader from '../components/galleria-header'
import { DATA, DATA_TYPE } from '../../DATA'

const FIRST_ITEM = 1;

export default function Home({ navigation } : {navigation: NavigationProp<any> }) {
    const { width } = useWindowDimensions();
    const renderItem = ({ item } : {item: DATA_TYPE}) => {
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
                    style={styles.overlay}>
                    <View style={styles.overlayText}>
                        <Text preset="h3" textColor="white">{item.name}</Text>
                        <Text preset="subhead2" textColor="white" style={[{ marginTop: spacing[1]}]}>
                            {item.artist.name}
                        </Text>
                    </View>
                </LinearGradient>
            </Pressable>
          
        ) 
    }
    return (
        <SafeAreaView>
            <GalleriaHeader 
                label="START SLIDESHOW" 
                onPress={() => navigation.navigate("Details", {id: FIRST_ITEM})} 
            />
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ paddingHorizontal: spacing[6], paddingTop: spacing[4], paddingBottom: spacing[8] }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute', 
        bottom: 10, 
        left: -15, 
        right: -15
    },
    overlayText: {
        paddingVertical: spacing[5], 
        paddingHorizontal: spacing[6], 
        width: 250
    }
})
