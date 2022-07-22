import Image from 'next/image';
import { useRef, useEffect } from 'react';

import { useMediaQuery } from '@/hooks';
import { useScrollContext } from '@/contexts';
import { ScrollIds } from '@/constants';

import {
  TokenomicsContainer,
  TitleContainer,
  FlexContainer,
  ContentFlexContainer,
} from './styles';

export const Tokenomics = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const { scrollId, onSetScrollId } = useScrollContext();
  const containerRef = useRef(null);

  useEffect(() => {
    if (scrollId === ScrollIds.TOKENOMICS && containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop,
        behavior: 'smooth',
      });
      onSetScrollId(null);
    }
    // eslint-disable-next-line
  }, [scrollId]);

  return (
    <TokenomicsContainer ref={containerRef}>
      <TitleContainer>
        <Image
          src='/images/tokenomics.png'
          alt='Tokenomics'
          width={648}
          height={148}
        />
      </TitleContainer>
      <FlexContainer>
        <ContentFlexContainer>
          <Image
            src='/images/tokenomics-button.png'
            alt='tokenomics button'
            width={438}
            height={457}
          />
          <Image
            src='/images/tokenomics-chart.png'
            alt='tokenomics chart'
            width={426}
            height={426}
          />
        </ContentFlexContainer>
        <div></div>
        <Image
          src='/images/doge-dollar-face.png'
          alt='doge dollar face'
          width={isMobile ? 170 : 350}
          height={isMobile ? 177 : 370}
        />
      </FlexContainer>
    </TokenomicsContainer>
  );
};
