import { useMemo } from 'react';
import { Dimensions, Text, StyleSheet } from 'react-native';

import { BALL_SIZE } from '../hooks/useBallSizeState';
import { BallPosProps } from '../types/BallPosProps';
import { BallSizeProps } from '../types/BallSizeProps';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

export default function Ball(props: BallSizeProps & BallPosProps) {
  const ballWidth = useMemo(
    () => Dimensions.get('window').width * (props.ballSize === BALL_SIZE.LARGE ? 0.3 : 0.1),
    [props.ballSize],
  );
  const offsetX = useSharedValue(props.x);
  const offsetY = useSharedValue(props.y);
  // const ballWidthVal = useSharedValue(ballWidth);

  const posAnimationConfig = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const ballPosAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withTiming(offsetX.value, posAnimationConfig) },
        { translateY: withTiming(offsetY.value, posAnimationConfig) },
      ],
    };
  });

  const sizeAnimationConfig = {
    damping: 20,
    stiffness: 90,
  };

  const ballSizeAnimationStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(ballWidth, sizeAnimationConfig),
      height: withSpring(ballWidth, sizeAnimationConfig),
    };
  }, [ballWidth]);

  return (
      <Animated.View
        style={[
          styles.ball,
          // ballPosAnimationStyle,
          ballSizeAnimationStyle,
          // {
          //   height: Dimensions.get('window').width * widthPerc,
          //   width: Dimensions.get('window').width * widthPerc,
          // },
        ]}
      >
      {/* <Text style={props.ballSize === BALL_SIZE.LARGE ? styles.largeText : styles.smallText}>
        {props.ballSize === BALL_SIZE.LARGE ? 'L' : 'S'}
      </Text> */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  ball: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
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
