import styled from 'styled-components';

export const RoadmapContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.lightYellow2};
  background-image: url('/icons/pattern.svg');
  background-repeat: repeat-y;
  background-position: center;
  background-size: 100%;
  padding: 33px 175px 128px 175px;
  min-height: 100vh;

  @media only screen and (max-width: 900px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 58px;
  }

  @media only screen and (max-width: 600px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 30px;
  }
`;

export const HorizontalDividerContainer = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    width: 34px;
    height: 6px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    @media only screen and (max-width: 500px) {
      left: 30%;
    }
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: center;
  flex-direction: ${({ direction }) => direction};
  margin-bottom: ${({ mb }) => mb};
`;

export const TimelineContainer = styled.div`
  position: relative;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${({ theme }) => theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 50px;

    @media only screen and (max-width: 500px) {
      left: 30%;
    }
  }
`;

export const TimelineContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 75px 0;
  gap: 109px;

  &:nth-child(2) {
    padding-top: 0;
  }

  @media only screen and (max-width: 400px) {
    gap: 80px;
  }

  &:after {
    content: '';
    width: 96px;
    height: 96px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url('/icons/coin.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;

    @media only screen and (max-width: 600px) {
      width: 50px;
      height: 50px;
      left: 30%;
    }
  }
`;

export const HorizontalDivider = styled.div`
  width: 34px;
  height: 6px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentContainer = styled.div`
  width: 314px;
`;
