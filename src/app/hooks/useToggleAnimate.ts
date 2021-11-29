import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

interface AnimateProps {
  config?: {
    easing?: (value: number) => number;
    duration?: number;
    delay?: number;
    useNativeDriver?: boolean;
  };
  defaultValue?: 0 | 1;
  outputRange: number[] | string[];
  onFinish?: (value: number) => void;
  disableStart?: boolean;
}
const useToggleAnimate = ({
  config = {duration: 400},
  defaultValue = 0,
  outputRange,
  onFinish = () => undefined,
  disableStart,
}: AnimateProps) => {
  const animate = useRef(new Animated.Value(defaultValue)).current;

  const getValue = () => Number(!parseInt(JSON.stringify(animate), 10));

  const onToggle = () => {
    animate.removeAllListeners();

    const value = getValue();
    Animated.timing(animate, {
      ...config,
      toValue: value,
      useNativeDriver: false,
    }).start(() => {
      onFinish(value);
      animate.setValue(value);
    });
    return Boolean(value);
  };
  const inAnim = () => getValue() === 1 && onToggle();
  const outAnim = () => getValue() === 0 && onToggle();

  const interpolate = animate.interpolate({
    inputRange: [0, 1],
    outputRange: outputRange,
  });
  useEffect(() => {
    !disableStart && inAnim();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {animate, onToggle, interpolate, inAnim, outAnim};
};
export default useToggleAnimate;
