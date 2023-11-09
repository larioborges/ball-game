import { Pressable, StyleSheet, Text } from 'react-native';

import { BallSizeProps } from '../types/BallSizeProps';

export default function BallSizeToggle(props: BallSizeProps) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        props.toggleBallSize();
      }}
    >
      <Text style={styles.btnText}>Change Ball Size</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
    marginBottom: 12,
  },
  btnText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
});
