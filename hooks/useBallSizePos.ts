import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

interface BallPos {
  x: number;
  y: number;
  z: number;
}

export default function useBallSizeState() {
  const [ballPosX, setBallPosX] = useState('ball_pos_x');
  const [ballPosY, setBallPosY] = useState('ball_pos_y');
  const [ballPosZ, setBallPosZ] = useState('ball_pos_z');

  const { getItem: getBallPosItem, setItem: setBallPosItem } =
    useAsyncStorage('ball_pos');

  const readBallPosFromStorage = async () => {
    const storedBallPos = await getBallPosItem();
    const ballPos = !storedBallPos
      ? { x: 0, y: 0, z: 0 }
      : JSON.parse(storedBallPos);
    setBallPosX(ballPos.x);
    setBallPosY(ballPos.y);
    setBallPosZ(ballPos.z);
  };

  const writeBallPosToStorage = async (newPos: BallPos) => {
    await setBallPosItem(JSON.stringify(newPos));
    setBallPosX(newPos.x?.toString());
    setBallPosY(newPos.y?.toString());
    setBallPosZ(newPos.z?.toString());
  };

  useEffect(() => {
    readBallPosFromStorage();
  }, []);

  return {
    ballPosX,
    ballPosY,
    ballPosZ,
    writeBallPosToStorage,
  };
}
