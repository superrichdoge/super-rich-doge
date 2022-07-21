import Image from 'next/image';
import { useMediaQuery } from '@/hooks';

import {
  RoadmapContainer,
  CenterContainer,
  TimelineContainer,
  HorizontalDivider,
  HorizontalDividerContainer,
  TimelineContent,
  ContentContainer,
} from './styles';

const timelineContents = [
  {
    img: '/images/roadmap-doge-1.png',
    title: 'PHASE 1',
    content:
      'Build Team , Project And Game Creation Contract verification on Bscscan Update logo on Bscscan Social Media Ads Banner Ads NFTs',
  },
  {
    img: '/images/roadmap-doge-2.png',
    title: 'PHASE 2',
    content:
      'PHASE 2 Game list on Playstore & Appstore Community Events ILO on Unicrypt Prelaunch Marketing List on Pancakeswap Trending on Dextools List on Coingecko List on Coinmarketcap Charity for School',
  },
  {
    img: '/images/roadmap-doge-3.png',
    title: 'PHASE 3',
    content:
      'Strategic Partnership Logo update on AVEDEX/Trust Wallet Marketing with big Influencer Listing Cex 5k+ Holders Open Game feature PVP mode Updating Game P2E',
  },
  {
    img: '/images/roadmap-doge-4.png',
    title: 'PHASE 4',
    content:
      'Add more NFTs minting Marketplace for NFT Game updating more dungeon Partnership with KOLs Huge Marketing 30k Member on Telegram More will be announced soon',
  },
];

export const Roadmap = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <RoadmapContainer>
      <CenterContainer mb='20px'>
        <Image
          src='/images/roadmap.png'
          alt='roadmap'
          width={646}
          height={218}
        />
      </CenterContainer>
      <TimelineContainer>
        <HorizontalDividerContainer />
        {timelineContents.map((timeline, index) => (
          <TimelineContent key={timeline.title}>
            <Image
              src={timeline.img}
              alt={`doge ${index + 1} image`}
              width={isMobile ? 77 : 313}
              height={isMobile ? 135 : 554}
            />
            <ContentContainer>
              <h3>{timeline.title}</h3>
              <p>{timeline.content}</p>
            </ContentContainer>
          </TimelineContent>
        ))}
        <HorizontalDividerContainer />
      </TimelineContainer>
    </RoadmapContainer>
  );
};
