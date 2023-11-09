import { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function useBallPosAnimationStyle(props) {
  const config = {
    duration: 150,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  return useAnimatedStyle(() => {
    return {
      left: withTiming(props.newX, config),
      top: withTiming(props.newY, config),
    };
  });
}
