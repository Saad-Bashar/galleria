import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { colors, spacing } from '../theme'
import Text from './text/text'
import Logo from '../../assets/Logo'

export default function GalleriaHeader({ label, onPress } : {label: string, onPress: () => void}) {
    return (
        
            <View style={[{paddingVertical: spacing[4], paddingHorizontal: spacing[6],  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: colors.mediumgray}]}> 
                <Logo />
                <Pressable onPress={onPress}>
                    <Text preset="small">{label}</Text>
                </Pressable>
            </View>
        
    )
}
