import { DeviceMotion } from 'expo-sensors';
import { useState, useEffect } from 'react';

import useDistanceTravelled from './useDistanceTravelled';

// const DEVICE_MOTION_INTERVAL = 400;
const DEVICE_MOTION_INTERVAL = 200;

export default function useDeviceMotion() {
  //   useEffect(() => {
  //     DeviceMotion.setUpdateInterval(400);
  //   }, []);

  const [
    { acceleration, accelerationIncludingGravity, interval, rotation },
    setData,
  ] = useState({
    acceleration: {
      x: 0,
      y: 0,
      z: 0,
    },
    accelerationIncludingGravity: {
      x: 0,
      y: 0,
      z: 0,
    },
    interval: DEVICE_MOTION_INTERVAL,
    rotation: {
      alpha: 0,
      beta: 0,
      gamma: 0,
    },
  });

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      DeviceMotion.addListener(deviceMotionData => {
        setData({
          acceleration: deviceMotionData.acceleration,
          accelerationIncludingGravity:
            deviceMotionData.accelerationIncludingGravity,
          interval: deviceMotionData.interval,
          rotation: deviceMotionData.rotation,
        });
      }),
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return {
    acceleration,
    accelerationIncludingGravity,
    interval,
    rotation,
    distanceTravelled: {
      x: useDistanceTravelled(
        DEVICE_MOTION_INTERVAL / 10,
        accelerationIncludingGravity.x,
      ),
      y: useDistanceTravelled(
        DEVICE_MOTION_INTERVAL / 10,
        accelerationIncludingGravity.y,
      ),
      z: useDistanceTravelled(
        DEVICE_MOTION_INTERVAL / 10,
        accelerationIncludingGravity.z,
      ),
    },
  };
}
