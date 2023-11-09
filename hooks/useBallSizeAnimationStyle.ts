import { Dimensions } from 'react-native';
import { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function useBallSizeAnimationStyle(props) {
  const config = {
    duration: 300,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  return useAnimatedStyle(() => {
    return {
      width: withTiming(
        Dimensions.get('window').width * props.widthPerc,
        config,
      ),
      height: withTiming(
        Dimensions.get('window').width * props.widthPerc,
        config,
      ),
    };
  });
}
