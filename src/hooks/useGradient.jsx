import React from 'react'
import { range } from '../utils';

import useIncrementingNumber from './useIncrementingNumber'

const rainbowColors = [
    '#00ADCE',
    '#009ACE',
    '#008CCE',
    '#0085FF',
    '#1578FF',
    '#2453FF',
    '#4B44FF',
    '#2F12FF',
    '#4200C7',
];
const paletteSize = rainbowColors.length
const WINDOW_SIZE = 3

const hasBrowserSupport =
    typeof window !== 'undefined'
    ? typeof window.CSS.registerProperty === 'function'
    : false

const getColorPropName = (id, index) => `--magic-rainbow-color-${id}-${index}`

const useRainbow = ({ intervalDelay = 2000 }) => {
    const prefersReducedMotion =
    typeof window === 'undefined'
      ? true
      : window.matchMedia('(prefers-reduced-motion: no-preference)')

const isEnabled = hasBrowserSupport && prefersReducedMotion.matches

const { current: uniqueId } = React.useRef(Date.now().toString())

  
React.useEffect(() => {
    if (!isEnabled) {
      return;
    }

    
    range(0, WINDOW_SIZE).map(index => {
      const name = getColorPropName(uniqueId, index);
      const initialValue = rainbowColors[index];

      CSS.registerProperty({
        name,
        initialValue,
        syntax: '<color>',
        inherits: false,
      });
    });
  }, [WINDOW_SIZE, isEnabled]);

  const intervalCount = useIncrementingNumber(intervalDelay);

  return range(0, WINDOW_SIZE).reduce((acc, index) => {
    const effectiveIntervalCount = isEnabled ? intervalCount : 0;

    const name = getColorPropName(uniqueId, index);
    const value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];

    return {
      ...acc,
      [name]: value,
    };
  }, {});
};

export default useRainbow

