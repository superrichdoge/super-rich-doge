import styled from 'styled-components';

export const HeroContainer = styled.section`
  background-image: url('/images/hero-background.jpg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 140px;
  position: relative;

  @media only screen and (max-width: 800px) {
    background-position: 90%;
  }
`;

export const WelcomeContainer = styled.div`
  margin-top: 10px;
  padding: 0 16px;

  @media only screen and (max-width: 640px) {
    margin-top: 180px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 870px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 0 16px;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  padding: 29px 13px 29px;
  position: absolute;
  top: 50%;
  right: 64px;
  transform: translateY(-50%);
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;
