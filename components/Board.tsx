import { View, StyleSheet } from 'react-native';

import Ball from './Ball';
import { BallSizeProps } from '../types/BallSizeProps';

export default function Board(props: BallSizeProps) {
  return (
    <View style={styles.container}>
      <Ball
        x={10}
        y={20}
        ballSize={props.ballSize}
        toggleBallSize={props.toggleBallSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    borderTopWidth: 2,
    borderColor: 'blue',
  },
});
