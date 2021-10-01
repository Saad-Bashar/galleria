import React, {useRef, useEffect} from 'react'
import { View, Image, useWindowDimensions, Animated, ScrollView, StyleSheet, Pressable } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element';
import AutoHeightImage from 'react-native-auto-height-image';
import GalleriaHeader from '../components/galleria-header';
import { colors, spacing } from '../theme';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Text from '../components/text/text';
import { color } from 'react-native-reanimated';
import PrevButton from '../../assets/PrevButton';
import NextButton from '../../assets/NextButton';
import { DATA, DATA_TYPE } from '../../DATA';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Progress from 'react-native-progress';


export default function Details({navigation, route} : {navigation: StackNavigationProp<any>, route: {params: {id: number}}}) {
	const insets = useSafeAreaInsets();
    const { id } = route.params;
	const item : DATA_TYPE = DATA.find((item) => item.id === id) as DATA_TYPE;
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const fadeAnimArtistName = useRef(new Animated.Value(0)).current;
	const fadeAnimArtistImage = useRef(new Animated.Value(0)).current;
	const fadeAnimDescription = useRef(new Animated.Value(0)).current;
	const fadeAnimYear = useRef(new Animated.Value(0)).current;
	const {width } = useWindowDimensions();
	const progress = id / DATA.length;

	useEffect(() => {
		fadeIn();
	}, [])

	const fadeIn = () => {
		Animated.stagger(400, [
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 1000,
				delay: 300,
				useNativeDriver: true,
			}),
			Animated.timing(fadeAnimArtistName, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(fadeAnimArtistImage, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(fadeAnimDescription, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
			Animated.timing(fadeAnimYear, {
				toValue: 1,
				duration: 1000,
				useNativeDriver: true,
			}),
		]).start();	
	};

	const onPressNext = () => {
		if (id < DATA.length) {
			navigation.replace('Details', {id: id + 1});
		}
		
	}

	const onPressPrev = () => {
		if (id > 1) {
			navigation.replace('Details', {id: id - 1});
		}
	}

    return (
      	<View style={{ flex: 1, paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom}}>
			<ScrollView>
				<GalleriaHeader label="STOP SLIDESHOW" onPress={() => navigation.goBack()} />
				<SharedElement id={`item.${id}.photo`}>
					<AutoHeightImage
						width={330}
						height={300}
						source={item.images.gallery}
						resizeMode="cover"
						style={[ { margin: spacing[5], alignSelf: 'center' } ]}
					/>
				</SharedElement>
				<Animated.View style={[styles.name, {opacity: fadeAnim}]}>
					<Text preset="h3">
						{item.name}
					</Text>
				</Animated.View>
				<Animated.View style={[styles.artistName,{ opacity: fadeAnimArtistName }]}>
					<Text>
						{item.artist.name}
					</Text>
				</Animated.View>
				<Animated.View style={[styles.artistImage,{ opacity: fadeAnimArtistImage }]}>
					<Image
						source={item.artist.image}
						style={{ height: 64, width: 64,  }}
						resizeMode="contain"
					/>
				</Animated.View>
				
				<Animated.View style={[{ margin: spacing[6] }, { opacity: fadeAnimDescription }]}>
					<Animated.View style={[styles.year, {opacity: fadeAnimYear}]}>
						<Text textColor={colors.mediumgray} style={{ fontSize: 100, fontWeight: 'bold' }}>
							{item.year}
						</Text>
					</Animated.View>
					<Text style={[{lineHeight: 28}]}>
						{item.description}
					</Text>
				</Animated.View>
			</ScrollView>
			<Progress.Bar progress={progress} height={1} borderWidth={0}  width={width} borderRadius={0} color="black" unfilledColor={colors.mediumgray} />
			<View style={[{ paddingHorizontal: spacing[6], paddingVertical: spacing[4], borderTopWidth: 1, borderTopColor: colors.mediumgray, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
				<View>
					<Text preset="subhead2">
						{item.name}
					</Text>
					<Text preset="small" textColor="black" style={{paddingTop: 4}}>
						{item.artist.name}
					</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Pressable onPress={onPressPrev}>
						<PrevButton />
					</Pressable>
					<Pressable onPress={onPressNext} style={{ marginLeft: spacing[4]}}>
						<NextButton />
					</Pressable>
				</View>
			</View>
		</View>
    );
}


const styles = StyleSheet.create({
	name: {
		marginTop: -60,
		width: 300,
		marginHorizontal: spacing[5],
		backgroundColor: "white",
		paddingTop: spacing[4],
		paddingLeft: spacing[4],
	},
  	artistName: { 
		paddingTop: spacing[2], 
		marginLeft: spacing[6], 
		left: 10 
	},
	artistImage: {
		marginTop: spacing[4], 
		marginLeft: spacing[6], 
		left: 10
	},
	year: {
		position: "absolute", 
		top: -70, 
		alignSelf: 'flex-end'
	}
});