/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, /* TouchableOpacity, */ TouchableNativeFeedback } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string
    color?: string
    ancho?: boolean
    action: ( action: string ) => void
}

export const ButtonCalc = ({ text, color = '#2D2D2D'/* , ancho = false */, action }: Props) => {
    return (
        <TouchableNativeFeedback background={ TouchableNativeFeedback.Ripple('#6D171A', true, 40) } onPress={ () => action(text) } >
            <View style={[ styles.button, { backgroundColor: color/* , width: ancho ? 180 : 80 */ } ]}>
                <Text style={[ styles.buttonText, { color: (color === '#D0C7C7') ? 'black' : 'white' } ]}>{ text }</Text>
            </View>
        </TouchableNativeFeedback>
    );
};
