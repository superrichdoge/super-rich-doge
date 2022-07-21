import styled from 'styled-components';

export const AboutUsContainer = styled.section`
  background-image: url('/images/coin-background.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 130px;
  padding-bottom: 167px;
  padding-left: 65px;
  padding-right: 65px;
  display: flex;
  align-items: flex-start;
  gap: 55px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 0;
    padding: 10px 16px 20px 16px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const AboutUsImage = styled.div`
  @media only screen and (max-width: 900px) {
    position: relative;
    z-index: 1;
    margin-top: 30px;
  }
`;

export const DogeContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-left: -350px;
  margin-top: 70px;

  @media only screen and (max-width: 1100px) {
    margin-left: -20vw;
  }

  @media only screen and (max-width: 900px) {
    margin-left: -200px;
    z-index: 0;
  }
`;

export const AboutUsDetailsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightYellow};
  box-shadow: 8px 9px 0 ${({ theme }) => theme.colors.primaryShadow};
  padding: 75.5px 24px;
  max-width: 545px;
  border-radius: 6px;

  p {
    text-align: center;
  }

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    margin-top: -50px;
    z-index: 1;
    padding: 12px 24px;
  }
`;
