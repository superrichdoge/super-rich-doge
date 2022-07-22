import { useState, useEffect, useRef } from 'react';

import { MainImageCard } from './styles';
import { dogeImages } from './config';

export const MainCard = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setImageIndex((currentImageIndex) => {
        if (currentImageIndex === dogeImages.length - 1) {
          return 0;
        }

        return (currentImageIndex += 1);
      });
    }, 1000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return (
    <MainImageCard
      width={426}
      height={565}
      src={`/images/doge-nft-${imageIndex + 1}.png`}
      alt='doge'
    />
  );
};
