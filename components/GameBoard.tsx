import { View, StyleSheet } from 'react-native';
import BallSizeToggle from './BallSizeToggle';

export default function GameBoard() {
  return (
    <View style={styles.container}>
      <BallSizeToggle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow'
  },
});
