import { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { DEVICE_MOTION_INTERVAL } from './useDeviceMotion';

export default function useBallPosAnimationStyle(props) {
  const config = {
    duration: DEVICE_MOTION_INTERVAL,
    easing: Easing.quad,
  };

  return useAnimatedStyle(() => {
    return {
      left: withTiming(props.newX, config),
      top: withTiming(props.newY, config),
    };
  });
}
