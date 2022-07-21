import Image from 'next/image';

import {
  PartnershipContainer,
  HeaderContainer,
  HeaderImageContainer,
  ContentContainer,
  ImageContainer,
  FooterImageContainer,
} from './styles';

export const Partnership = () => {
  return (
    <PartnershipContainer>
      <HeaderContainer>
        <HeaderImageContainer>
          <Image
            src='/images/partnership.png'
            alt='partnership'
            width={426}
            height={113}
          />
        </HeaderImageContainer>
      </HeaderContainer>
      <ContentContainer>
        <ImageContainer>
          <Image
            src='/images/partnership-coinbase.png'
            alt='coinbase'
            width={268}
            height={48}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src='/images/partnership-pancake.png'
            alt='pancake'
            width={330}
            height={51}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src='/images/partnership-coinmarketcap.png'
            alt='coinmarketcap'
            width={318}
            height={55}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src='/images/partnership-coingecko.png'
            alt='coingecko'
            width={262}
            height={69}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src='/images/partnership-crypto.png'
            alt='crypto.com'
            width={338}
            height={65}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src='/images/partnership-binance.png'
            alt='binance'
            width={275}
            height={55}
          />
        </ImageContainer>
      </ContentContainer>
      <FooterImageContainer>
        <Image
          src='/images/partnership-doge-money.png'
          alt='Doge money'
          width={738}
          height={376}
        />
      </FooterImageContainer>
    </PartnershipContainer>
  );
};
