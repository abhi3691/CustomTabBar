import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useReducer} from 'react';
import {MotiView} from 'moti';

function Shape() {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
        borderRadius: 25,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        borderRadius: 250,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
        repeatReverse: true,
      }}
      style={styles.shape}
    />
  );
}

const HomeScreen = () => {
  const [visible, toggle] = useReducer(s => !s, true);

  return (
    <Pressable onPress={toggle} style={styles.container}>
      {visible && <Shape />}
    </Pressable>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#3F4247',
  },
});
