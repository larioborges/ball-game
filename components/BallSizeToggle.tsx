import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { Button } from 'react-native';
import { useEffect, useState } from 'react';
import useBallSizeState, { BALL_SIZE } from '../hooks/usBallSizeState';

export default function BallSizeToggle() {
    const {
        ballSize,
        toggleBallSize,
      } = useBallSizeState();

    return (
        <Button
            title={`Change Ball Size from ${ballSize}`}
            onPress={ async () => {
                await toggleBallSize();
            }}
        />
    );
}
