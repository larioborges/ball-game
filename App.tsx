import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import useMeasureGyro from './hooks/useMeasureGyro';
// import Ball from './components/Ball';
import GameBoard from './components/GameBoard';

export default function App() {
  // console.log(useMeasureGyro());

  return (
    <GameBoard />
  );
}
