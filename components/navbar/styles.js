import styled, { css } from 'styled-components';

export const Header = styled.header`
  height: 95px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 10;

  @media only screen and (max-width: 640px) {
    height: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 30px;
  padding: 0 65px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(100vw);
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.2s;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateX(0);
      `}
  }
`;

export const NavMenuItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  padding: 35px;
  transition: all 0.2s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
  }

  @media only screen and (max-width: 900px) {
    width: 50vw;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 24px;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: clamp(137px, 18vw, 205px);
  height: clamp(107px, 18vw, 160px);
  display: block;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 13px;
  left: 50px;

  @media only screen and (max-width: 640px) {
    left: 16px;
  }
`;

export const HamburgerContainer = styled.div`
  display: none;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 40px;
  cursor: pointer;
  z-index: 11;

  @media only screen and (max-width: 900px) {
    display: block;
  }

  @media only screen and (max-width: 640px) {
    right: 20px;
  }
`;

export const Hamburger = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  top: 50%;
  left: 0;
  border-radius: 50px;
  transform: translateY(-50%);
  transition: all 0.4s;
  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: inherit;
    border-radius: 50px;
    top: 0;
    left: 0;
    transition: all 0.4s;
  }
  &:before {
    top: 8px;
  }
  &:after {
    top: -8px;
  }
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(-50%) rotate(45deg);
      &:before {
        top: 0;
      }
      &:after {
        top: 0;
        transform: rotate(-90deg);
      }
    `};
`;

export const MenuToggler = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  display: none;
  position: absolute;
  width: 25px;
  height: 25px;
  right: 40px;
  opacity: 0;
  cursor: pointer;
  z-index: 12;

  @media only screen and (max-width: 900px) {
    display: block;
  }

  @media only screen and (max-width: 640px) {
    right: 20px;
  }
`;
