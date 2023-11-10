export default function useDistanceTravelled(
  time: number,
  acceleration: number,
) {
  return (time * time * -1 * acceleration) / 2;
}
