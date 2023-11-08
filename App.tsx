import React from 'react';
import { Calculator } from './src/screens/Calculator';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={ styles.background }>
      <StatusBar backgroundColor="black" />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
