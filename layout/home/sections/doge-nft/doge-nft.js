import Image from 'next/image';
import {
  DogeNftContainer,
  HeaderContainer,
  NftCard,
  CardContainer,
} from './styles';
import { MainCard } from './main-card';
import { colors } from './config';

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
        {colors.map((color) => (
          <NftCard key={color} bg={color} size='sm' />
        ))}
      </CardContainer>
    </DogeNftContainer>
  );
};
