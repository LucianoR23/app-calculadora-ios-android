import { useRef, useState } from 'react';

enum Operators {
    add, substract, multiply, divide
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
    };

    const settingNumber = ( numberText: string ) => {

        if ( number.includes('.') && numberText === '.' ) {return;}

        if ( number.startsWith('0') || number.startsWith('-0') ){

            if ( numberText === '.' ){
                setNumber( number + numberText );

            } else if ( numberText === '0' && number.includes('.') ){
                setNumber( number + numberText );
            } else if ( numberText !== '0' && !number.includes('.') ){
                setNumber( numberText );
            } else if ( numberText === '0' && !number.includes('.') ){
                setNumber( number );
            } else {
                setNumber( number + numberText );
            }

        } else {
            setNumber( number + numberText );
        }

    };

    const btnDel = () => {
        if ( number.includes('-') && number.length === 2 ){
            return setNumber('0');
        } else if ( number.length === 1 ){
            return setNumber('0');
        } else if ( number === '0' ){
            return;
        }

        setNumber( prevNum => prevNum.slice(0, -1) );
    };

    const positiveNegative = () => {
        if ( number.includes('-') ){
            setNumber( number.replace('-', '') );
        } else {
            setNumber( '-' + number );
        }
    };

    const changeNumToPrev = () => {
        if ( number.endsWith('.') ){
            setNumber('0');
            return setPrevNumber( number.slice(0,-1) );
        }
        setPrevNumber( number );
        setNumber('0');
    };

    const btnDivide = () => {
        changeNumToPrev();
        lastOperation.current = Operators.divide;
    };

    const btnMultiply = () => {
        changeNumToPrev();
        lastOperation.current = Operators.multiply;
    };

    const btnSubstract = () => {
        changeNumToPrev();
        lastOperation.current = Operators.substract;
    };

    const btnAdd = () => {
        changeNumToPrev();
        lastOperation.current = Operators.add;
    };

    const btnPercentage = () => {
        setNumber(`${ Number(number) / 100 }`);
    };

    const calculate = () => {

        const num1 = Number( prevNumber );
        const num2 = Number( number );

        switch ( lastOperation.current ) {
            case Operators.add:
                setNumber( `${ num1 + num2 }` );
                setPrevNumber(`${num1} + ${num2}`);
                break;

            case Operators.substract:
                setNumber( `${ num1 - num2 }` );
                setPrevNumber(`${num1} - ${num2}`);
                break;

            case Operators.multiply:
                setNumber( `${ num1 * num2 }` );
                setPrevNumber(`${num1} × ${num2}`);
                break;

            case Operators.divide:
                setNumber( `${ num1 / num2 }` );
                setPrevNumber(`${num1} ÷ ${num2}`);
                break;
        }

        lastOperation.current = undefined;
        // setPrevNumber('0');
    };

    return {
        number,
        prevNumber,
        clean,
        settingNumber,
        btnDel,
        positiveNegative,
        btnDivide,
        btnMultiply,
        btnSubstract,
        btnAdd,
        btnPercentage,
        calculate,
    };
};
