import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/navigation/bottom_tab/BottomTab';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEFF3',
    flex: 1,
  },
});
