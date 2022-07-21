import styled from 'styled-components';

export const PartnershipContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding-bottom: 32px;
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  background-image: url('/icons/money.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 90px;
  padding-top: 40px;

  @media only screen and (max-width: 600px) {
    padding: 16px;
    padding-top: 100px;
  }
`;

export const HeaderImageContainer = styled.div`
  position: relative;

  img {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    background-image: url('/icons/light.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 500px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 75px;
  padding: 0 84px;
  margin-bottom: 60px;

  @media only screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 80px;
    padding: 0 16px;
    justify-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const FooterImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 84px;

  @media only screen and (max-width: 450px) {
    padding: 0;
  }
`;
