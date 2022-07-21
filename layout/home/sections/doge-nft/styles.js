import styled, { keyframes } from 'styled-components';

const slides = keyframes`
  from {
    transform: translateX(5%);
  }

  to {
    transform: translateX(-50%);
  }
`;

export const DogeNftContainer = styled.section`
  background-image: url('/images/coin-gradient-background.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 150px;
  padding-bottom: 184px;
`;

export const HeaderContainer = styled.div`
  padding: 0 65px;
  display: flex;
  align-items: flex-start;
  gap: 123px;
  margin-bottom: 157px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 55px;
    padding: 0 20px;
  }
`;

export const NftCard = styled.div`
  width: ${({ size }) => (size === 'sm' ? '150px' : '430px')};
  height: ${({ size }) => (size === 'sm' ? '200px' : '585px')};
  min-width: 150px;
  background-color: ${({ bg }) => bg};
  border-radius: 8px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: ${({ size }) => (size === 'sm' ? '200px' : '421px')};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  animation: ${slides} infinite 4s linear;
`;
