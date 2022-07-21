import Image from 'next/image';

import { TeamsContainer, CenterContainer } from './styles';

export const Teams = () => {
  return (
    <TeamsContainer>
      <CenterContainer mb='24px'>
        <Image
          src='/images/our-team.png'
          alt='our team'
          width={404}
          height={224}
        />
      </CenterContainer>
      <CenterContainer justify='space-between'>
        <Image src='/images/team-1.png' alt='team 1' width={258} height={322} />
        <Image src='/images/team-2.png' alt='team 2' width={258} height={322} />
        <Image src='/images/team-3.png' alt='team 3' width={258} height={322} />
      </CenterContainer>
    </TeamsContainer>
  );
};
