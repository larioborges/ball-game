import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export const BALL_SIZE = {
    SMALL: 'SMALL',
    LARGE: 'LARGE',
};

export default function useBallSizeState() {
    const [ballSize, setBallSize] = useState('ball_size');
    const { getItem: getBallSizeItem, setItem: setBallSizeItem } = useAsyncStorage('ball_size');

    const readBallSizeFromStorage = async () => {
        const storedBallSize = await getBallSizeItem();
        const ballSize = storedBallSize !== BALL_SIZE.SMALL || storedBallSize !== BALL_SIZE.LARGE ? BALL_SIZE.SMALL : storedBallSize;
        setBallSize(ballSize);
    };

    const toggleBallSize = async () => {
        const newValue = ballSize === BALL_SIZE.SMALL ? BALL_SIZE.LARGE : BALL_SIZE.SMALL
        await setBallSizeItem(newValue);
        setBallSize(newValue);
    };

    useEffect(() => {
        readBallSizeFromStorage();
    }, []);

    return {
        ballSize,
        toggleBallSize,
    };
}
