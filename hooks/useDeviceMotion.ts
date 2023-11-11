import { DeviceMotion } from 'expo-sensors';
import { useState, useEffect } from 'react';

export const DEVICE_MOTION_INTERVAL = 250;
const DEVICE_MOTION_SLOWDOWN = 25;

const calcDistanceTravelled = (time: number, acceleration: number) =>
  (time * time * -1 * acceleration) / 2;

export default function useDeviceMotion() {
  const [
    { accelerationIncludingGravity, xTravelled, yTravelled, zTravelled },
    setData,
  ] = useState({
    accelerationIncludingGravity: {
      x: 0,
      y: 0,
      z: 0,
    },
    xTravelled: 0,
    yTravelled: 0,
    zTravelled: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      DeviceMotion.addListener(deviceMotionData => {
        const xTravelled = calcDistanceTravelled(
          DEVICE_MOTION_INTERVAL / DEVICE_MOTION_SLOWDOWN,
          (accelerationIncludingGravity.x +
            deviceMotionData.accelerationIncludingGravity.x) /
            2,
        );
        const yTravelled = calcDistanceTravelled(
          DEVICE_MOTION_INTERVAL / DEVICE_MOTION_SLOWDOWN,
          (accelerationIncludingGravity.y +
            deviceMotionData.accelerationIncludingGravity.y) /
            2,
        );
        const zTravelled = calcDistanceTravelled(
          DEVICE_MOTION_INTERVAL / DEVICE_MOTION_SLOWDOWN,
          (accelerationIncludingGravity.z +
            deviceMotionData.accelerationIncludingGravity.z) /
            2,
        );

        setData({
          accelerationIncludingGravity:
            deviceMotionData.accelerationIncludingGravity,
          xTravelled,
          yTravelled,
          zTravelled,
        });
      }),
    );
    DeviceMotion.setUpdateInterval(DEVICE_MOTION_INTERVAL);
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
    xTravelled,
    yTravelled,
    zTravelled,
  };
}
