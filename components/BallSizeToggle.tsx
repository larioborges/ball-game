import { Button } from 'react-native';

export default function BallSizeToggle(props) {
  return (
    <Button
      title={`Change Ball Size from ${props.ballSize}`}
      onPress={() => {
        props.toggleBallSize();
      }}
    />
  );
}
