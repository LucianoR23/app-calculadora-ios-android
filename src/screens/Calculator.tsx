import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

export const Calculator = () => {

    const { number, prevNumber, clean, settingNumber, btnDel, positiveNegative, btnDivide, btnMultiply, btnSubstract, btnAdd, btnPercentage, calculate } = useCalculator();

    return (
        <View style={ styles.container }>
            {
                ( prevNumber !== '0' ) && (
                    <Text style={ styles.resultSmall }>{ prevNumber }</Text>
                )
            }
            <Text style={ styles.result } numberOfLines={1} adjustsFontSizeToFit >{ number }</Text>

            <View style={ styles.row }>
                <ButtonCalc color="#D0C7C7" text="C" action={ clean } />
                <ButtonCalc color="#D0C7C7" text="+/-" action={ positiveNegative } />
                <ButtonCalc color="#D0C7C7" text="%" action={ btnPercentage } />
                <ButtonCalc color="#C1292E" text="÷" action={ btnDivide } />
            </View>
            <View style={ styles.row }>
                <ButtonCalc text="7" action={ settingNumber } />
                <ButtonCalc text="8" action={ settingNumber } />
                <ButtonCalc text="9" action={ settingNumber } />
                <ButtonCalc text="×" color="#C1292E" action={ btnMultiply } />
            </View>
            <View style={ styles.row }>
                <ButtonCalc text="4" action={ settingNumber } />
                <ButtonCalc text="5" action={ settingNumber } />
                <ButtonCalc text="6" action={ settingNumber } />
                <ButtonCalc text="-" color="#C1292E" action={ btnSubstract } />
            </View>
            <View style={ styles.row }>
                <ButtonCalc text="1" action={ settingNumber } />
                <ButtonCalc text="2" action={ settingNumber } />
                <ButtonCalc text="3" action={ settingNumber } />
                <ButtonCalc text="+" color="#C1292E" action={ btnAdd } />
            </View>
            <View style={ styles.row }>
                <ButtonCalc text="0" action={ settingNumber } ancho />
                <ButtonCalc text="." action={ settingNumber } />
                <ButtonCalc text="del" action={ btnDel } />
                <ButtonCalc text="=" color="#C1292E" action={ calculate } />
            </View>
        </View>
    );
};
