import styled from 'styled-components';

export const TeamsContainer = styled.section`
  background-image: url('/images/team-background.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 70px 60px 180px 60px;
  min-height: 100vh;
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'center'};
  margin-bottom: ${({ mb }) => mb};
  gap: 60px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
