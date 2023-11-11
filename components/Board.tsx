import { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Ball, { getBallSizePerc } from './Ball';
import useDeviceMotion from '../hooks/useDeviceMotion';
import { BallSizeProps } from '../types/BallSizeProps';

export default function Board(props: BallSizeProps) {
  const { xTravelled, yTravelled } = useDeviceMotion();

  const [ballPosX, setBallPosX] = useState(0);
  const [ballPosY, setBallPosY] = useState(0);

  const windowWidth = useMemo(() => Dimensions.get('window').width, []);
  const windowHeight = useMemo(() => Dimensions.get('window').height, []);

  const maxX = useMemo(
    () => windowWidth / 2 - (getBallSizePerc(props.ballSize) * windowWidth) / 2,
    [props.ballSize, windowWidth],
  );
  const minX = useMemo(() => -maxX, [maxX]);

  const maxY = useMemo(
    () =>
      windowHeight / 2 - (getBallSizePerc(props.ballSize) * windowWidth) / 2,
    [props.ballSize, windowHeight, windowWidth],
  );
  const minY = useMemo(() => -maxY, [maxY]);

  useEffect(() => {
    const newX = (() => {
      const newX = ballPosX - xTravelled;
      if (newX < minX) return minX;
      if (newX > maxX) return maxX;
      return newX;
    })();
    setBallPosX(newX);

    const newY = (() => {
      const newY = ballPosY + yTravelled;
      if (newY < minY) return minY;
      if (newY > maxY) return maxY;
      return newY;
    })();
    setBallPosY(newY);
  }, [xTravelled, yTravelled]);

  return (
    <View style={styles.container}>
      <Ball
        x={ballPosX}
        y={ballPosY}
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
  },
});
