import Image from 'next/image';
import { useMediaQuery } from '@/hooks';
import {
  TokenomicsContainer,
  TitleContainer,
  FlexContainer,
  ContentFlexContainer,
} from './styles';

export const Tokenomics = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  return (
    <TokenomicsContainer>
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
