import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Dimensions, TouchableHighlight, Text } from 'react-native';
import useBallSizeState from '../hooks/usBallSizeState';

export default function Ball() {
  const {
    ballSize,
  } = useBallSizeState();

  return (
    <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.3, //* 0.1
        height: Dimensions.get('window').width * 0.3, //* 0.1
        backgroundColor:'#f00',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
    >
      <Text>Big Ball</Text>
    </TouchableHighlight>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
