import { Button } from 'react-native';
import { BallSizeProps } from '../types/BallSizeProps';

export default function BallSizeToggle(props: BallSizeProps) {
  return (
    <Button
      title={`Change Ball Size from ${props.ballSize}`}
      onPress={() => {
        props.toggleBallSize();
      }}
    />
  );
}
