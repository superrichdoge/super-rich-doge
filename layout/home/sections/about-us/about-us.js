import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { useScrollContext } from '@/contexts';
import { ScrollIds } from '@/constants';

import {
  AboutUsContainer,
  IconContainer,
  DogeContainer,
  AboutUsDetailsContainer,
  AboutUsImage,
} from './styles';

export const AboutUs = () => {
  const { scrollId, onSetScrollId } = useScrollContext();
  const containerRef = useRef(null);

  useEffect(() => {
    if (scrollId === ScrollIds.ABOUT_US && containerRef.current) {
      window.scrollTo({
        top: containerRef.current.offsetTop,
        behavior: 'smooth',
      });
      onSetScrollId(null);
    }
    // eslint-disable-next-line
  }, [scrollId]);

  return (
    <AboutUsContainer ref={containerRef}>
      <IconContainer>
        <AboutUsImage>
          <Image
            src='/icons/about-us.svg'
            alt='about us'
            width={476}
            height={266}
          />
        </AboutUsImage>
        <DogeContainer>
          <Image
            src='/icons/about-us-doge.svg'
            alt='about us doge'
            width={533}
            height={495}
          />
        </DogeContainer>
      </IconContainer>
      <AboutUsDetailsContainer>
        <p>
          Hi Everyone, Welcome back to School. How are you guys ? Do you guys
          miss your school days ? Meta School Doge Project is a project that
          will reminisce about our moments in school. There are a lof of good
          memories in school, that&apos;s why I know that you guys must be very
          missed of your school days. Some of you may still studying in school,
          working, married or even having children. In this project, I really
          want to share for all of us and remember the beautiful times we used
          to be in school such as our school places, classmates and teachers.
          There are no other beautiful times than when we were in school. For
          all of you who have discovered this project, I really want to hear
          your memories of your school days. Message box is provided below in
          order for all of you to share your school days. I do hope that all of
          your schools day are wonderful and fun. Have a great day everyone.
        </p>
      </AboutUsDetailsContainer>
    </AboutUsContainer>
  );
};
