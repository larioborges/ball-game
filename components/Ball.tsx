import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useMemo, useState } from 'react';
import { Dimensions, TouchableHighlight, Text, StyleSheet } from 'react-native';
import { BALL_SIZE } from '../hooks/usBallSizeState';

export default function Ball(props) {
  const widthPerc = useMemo(() => (props.ballSize === BALL_SIZE.LARGE ? 0.3 : 0.1), [props.ballSize]);

  return (
    <TouchableHighlight
      style={{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * widthPerc,
        height: Dimensions.get('window').width * widthPerc,
        backgroundColor: '#f00',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      underlayColor="#ccc"
      onPress={() => {
        props.toggleBallSize();
      }}
    >
      <Text style={props.ballSize === BALL_SIZE.LARGE ? styles.largeText : styles.smallText}>
        {props.ballSize === BALL_SIZE.LARGE ? 'L' : 'S'}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  largeText: {
    color: 'yellow',
    fontWeight: '800',
    fontSize: 50,
  },
  smallText: {
    color: 'yellow',
    fontWeight: '800',
    fontSize: 22,
  },
});
