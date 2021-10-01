import React from 'react';
import { Text as ReactNativeText, TextStyle } from 'react-native';
import { presets, TextPresets } from './text.preset';
// @ts-ignore
import { mergeAll, flatten } from 'ramda';

export interface TextProps {
    children?: React.ReactNode;
    style?: TextStyle | TextStyle[];
    preset?: TextPresets;
    textColor?: string;
    centered?: boolean;
}

export default function Text(props: TextProps) {
    // grab the props
    const {
        preset = 'default',
        children,
        style: styleOverride,
        textColor,
        centered,
        ...rest
    } = props;

    const style = mergeAll(
        flatten([presets[preset] || presets.default, styleOverride]),
    );

    return (
        <ReactNativeText
            {...rest}
            style={[
                style,
                textColor && { color: textColor },
                centered && { textAlign: 'center' },
            ]}>
            {children}
        </ReactNativeText>
    );
}