import styled from 'styled-components';

export const TokenomicsContainer = styled.section`
  background-image: url('/images/tokenomics-background.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 65px;
  padding-bottom: 238px;

  @media only screen and (max-width: 600px) {
    padding: 78px 16px 12px 16px;
  }
`;

export const TitleContainer = styled.div`
  margin-bottom: 50px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 40px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentFlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
