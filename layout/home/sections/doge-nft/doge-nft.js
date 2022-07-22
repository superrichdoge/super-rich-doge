import Image from 'next/image';
import { DogeNftContainer, HeaderContainer, CardContainer } from './styles';
import { MainCard } from './main-card';
import { dogeImages } from './config';

export const DogeNft = () => {
  return (
    <DogeNftContainer>
      <HeaderContainer>
        <Image
          src='/icons/super-rich-doge-nft.svg'
          alt='super rich doge nft'
          width={323}
          height={323}
        />
        <MainCard />
      </HeaderContainer>
      <CardContainer>
        {dogeImages.map((_, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={index}
            src={`/images/doge-nft-${index + 1}.png`}
            alt='super rich doge nft'
            width={150}
            height={222}
          />
        ))}
      </CardContainer>
    </DogeNftContainer>
  );
};
