import { DeviceMotion } from 'expo-sensors';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Ball from './Ball';
import { BALL_SIZE } from '../hooks/useBallSizeState';
import useDeviceMotion from '../hooks/useDeviceMotion';
import { BallSizeProps } from '../types/BallSizeProps';

export default function Board(props: BallSizeProps) {
  // const { xDelta, yDelta } = useMeasureGyro();
  // const {
  // acceleration,
  // accelerationIncludingGravity,
  // interval,
  // rotation,
  //   distanceTravelled,
  // } = useDeviceMotion();
  // console.log('distanceTravelled', distanceTravelled);

  const [ballPosX, setBallPosX] = useState(0);
  const [ballPosY, setBallPosY] = useState(0);

  // const newX = useMemo(() => ballPosX - xDelta, [ballPosX, xDelta]);
  // const newY = useMemo(() => ballPosY - yDelta, [ballPosY, yDelta]);

  // const boundBallPos = useCallback(
  //   (x: number, y: number) => {
  //     const halfWidth = Dimensions.get('window').width / 2;
  //     const halfHeight = Dimensions.get('window').height / 2;

  //     // if (props.ballSize === BALL_SIZE.LARGE) {
  //     if (x < -1 * halfWidth) {
  //       x = -1 * halfWidth;
  //     } else if (x > halfWidth) {
  //       x = halfWidth;
  //     }

  //     if (y < -1 * halfHeight) {
  //       y = -1 * halfHeight;
  //     } else if (x > halfHeight) {
  //       y = halfHeight;
  //     }
  //     // } else {

  //     // }

  //     return { x, y };
  //   },
  //   [props.ballSize],
  // );

  // useEffect(() => {
  //   const { x: newX, y: newY } = boundBallPos(
  //     ballPosX + distanceTravelled.x,
  //     ballPosY + distanceTravelled.y,
  //   );
  //   setBallPosX(newX);
  //   setBallPosY(newY);
  // }, [distanceTravelled.x, distanceTravelled.y]);

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
    borderTopWidth: 2,
    borderColor: 'blue',
  },
});
