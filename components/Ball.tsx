import { useMemo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { BALL_SIZE } from '../hooks/useBallSizeState';
import { BallPosProps } from '../types/BallPosProps';
import { BallSizeProps } from '../types/BallSizeProps';

export default function Ball(props: BallSizeProps & BallPosProps) {
  const ballWidth = useMemo(
    () =>
      Dimensions.get('window').width *
      (props.ballSize === BALL_SIZE.LARGE ? 0.3 : 0.1),
    [props.ballSize],
  );

  const posAnimationConfig = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const ballPosAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(props.x, posAnimationConfig) },
        { translateY: withTiming(props.y, posAnimationConfig) },
      ],
    };
  });

  const sizeAnimationConfig = {
    damping: 20,
    stiffness: 90,
  };

  const ballSizeAnimationStyle = useAnimatedStyle(
    () => ({
      width: withSpring(ballWidth, sizeAnimationConfig),
      height: withSpring(ballWidth, sizeAnimationConfig),
    }),
    [ballWidth],
  );

  const ballColor = useMemo(
    () => (props.ballSize === BALL_SIZE.LARGE ? 'red' : 'orange'),
    [props.ballSize],
  );
  const ballColorStyle = { backgroundColor: ballColor };

  return (
    <Animated.View
      style={[
        styles.ball,
        ballPosAnimationStyle,
        ballSizeAnimationStyle,
        ballColorStyle,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  ball: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});
