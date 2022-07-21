import { useState, useEffect, useRef } from 'react';
import { NftCard } from './styles';
import { colors } from './config';

export const MainCard = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setColorIndex((currentColorIndex) => {
        if (currentColorIndex === colors.length - 1) {
          return 0;
        }

        return (currentColorIndex += 1);
      });
    }, 1000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return <NftCard bg={colors[colorIndex]} />;
};
