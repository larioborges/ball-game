import { View, StyleSheet } from 'react-native';

import Ball from './Ball';
import BallSizeToggle from './BallSizeToggle';
import useBallSizeState from '../hooks/useBallSizeState';

export default function GameBoard() {
  const { ballSize, toggleBallSize } = useBallSizeState();

  return (
    <View style={styles.container}>
      <BallSizeToggle
        ballSize={ballSize}
        toggleBallSize={toggleBallSize}
      />
      <Ball
        ballSize={ballSize}
        toggleBallSize={toggleBallSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },
});
