/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { useMediaQuery } from '@/hooks';
import {
  Header,
  Nav,
  NavMenu,
  NavMenuItem,
  Logo,
  LogoContainer,
  HamburgerContainer,
  Hamburger,
  MenuToggler,
} from './styles';

export const Navbar = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1100px)' });
  const [isOpen, setIsOpen] = useState(false);

  const rootElRef = useRef();

  useEffect(() => {
    if (!rootElRef.current) {
      rootElRef.current = document.getElementById('__next');
    }
  }, []);

  useEffect(() => {
    if (rootElRef.current) {
      if (isOpen) {
        rootElRef.current.style.overflow = 'hidden';
        rootElRef.current.style.height = '100vh';
      } else {
        rootElRef.current.style.overflow = 'initial';
        rootElRef.current.style.height = 'auto';
      }
    }
  }, [isOpen]);

  const onToggle = () => setIsOpen((currentOpen) => !currentOpen);

  return (
    <Header>
      <Nav>
        <LogoContainer>
          <Logo src='/icons/logo.svg' alt='Super rich doge logo' />
        </LogoContainer>
        <div />
        {isDesktop ? (
          <NavMenu>
            <NavMenuItem>About us</NavMenuItem>
            <NavMenuItem>Tokenomics</NavMenuItem>
            <NavMenuItem>Partnership</NavMenuItem>
            <NavMenuItem>Whitepaper</NavMenuItem>
            <NavMenuItem>Marketplace</NavMenuItem>
          </NavMenu>
        ) : (
          <>
            <MenuToggler onChange={onToggle} isOpen={isOpen} />
            <HamburgerContainer data-testid='hamburger-container'>
              <Hamburger isOpen={isOpen} />
            </HamburgerContainer>
            <NavMenu isOpen={isOpen}>
              <NavMenuItem>About us</NavMenuItem>
              <NavMenuItem>Tokenomics</NavMenuItem>
              <NavMenuItem>Partnership</NavMenuItem>
              <NavMenuItem>Whitepaper</NavMenuItem>
              <NavMenuItem>Marketplace</NavMenuItem>
            </NavMenu>
          </>
        )}
      </Nav>
    </Header>
  );
};
