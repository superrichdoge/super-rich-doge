import Image from 'next/image';

import { Button } from '@/components';

import {
  ButtonContainer,
  HeroContainer,
  WelcomeContainer,
  SocialIconContainer,
} from './styles';

export const Hero = () => {
  return (
    <HeroContainer>
      <WelcomeContainer>
        <Image
          src='/icons/welcome.svg'
          alt='welcome'
          width={780}
          height={280}
        />
      </WelcomeContainer>
      <ButtonContainer>
        <Button>Audit</Button>
        <Button>Pre-sale</Button>
        <Button>Whitepaper</Button>
      </ButtonContainer>
      <SocialIconContainer>
        <a href='https://youtube.com' target='_blank' rel='noreferrer'>
          <Image
            src='/icons/youtube.svg'
            alt='youtube icon'
            width={60}
            height={60}
          />
        </a>
        <a href='https://telegram.com' target='_blank' rel='noreferrer'>
          <Image
            src='/icons/telegram.svg'
            alt='telegram icon'
            width={60}
            height={60}
          />
        </a>
        <a href='https://twitter.com' target='_blank' rel='noreferrer'>
          <Image
            src='/icons/twitter.svg'
            alt='twitter icon'
            width={60}
            height={60}
          />
        </a>
      </SocialIconContainer>
    </HeroContainer>
  );
};
