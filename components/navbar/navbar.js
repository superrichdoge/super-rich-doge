/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks';
import { useScrollContext } from '@/contexts';
import { ScrollIds } from '@/constants';

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
  const isDesktop = useMediaQuery({ query: '(min-width: 900px)' });
  const [isOpen, setIsOpen] = useState(false);
  const { onSetScrollId } = useScrollContext();

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

  const onClickNav = (id) => () => {
    onToggle();
    onSetScrollId(id);
  };

  return (
    <Header>
      <Nav>
        <LogoContainer>
          <Logo src='/icons/logo.svg' alt='Super rich doge logo' />
        </LogoContainer>
        <div />
        {isDesktop ? (
          <NavMenu>
            <NavMenuItem onClick={onClickNav(ScrollIds.ABOUT_US)}>
              About us
            </NavMenuItem>
            <NavMenuItem onClick={onClickNav(ScrollIds.TOKENOMICS)}>
              Tokenomics
            </NavMenuItem>
            <NavMenuItem onClick={onClickNav(ScrollIds.PARTNERSHIP)}>
              Partnership
            </NavMenuItem>
            <NavMenuItem>Marketplace</NavMenuItem>
          </NavMenu>
        ) : (
          <>
            <MenuToggler onChange={onToggle} isOpen={isOpen} />
            <HamburgerContainer data-testid='hamburger-container'>
              <Hamburger isOpen={isOpen} />
            </HamburgerContainer>
            <NavMenu isOpen={isOpen}>
              <NavMenuItem onClick={onClickNav(ScrollIds.ABOUT_US)}>
                About us
              </NavMenuItem>
              <NavMenuItem onClick={onClickNav(ScrollIds.TOKENOMICS)}>
                Tokenomics
              </NavMenuItem>
              <NavMenuItem onClick={onClickNav(ScrollIds.PARTNERSHIP)}>
                Partnership
              </NavMenuItem>
              <NavMenuItem>Marketplace</NavMenuItem>
            </NavMenu>
          </>
        )}
      </Nav>
    </Header>
  );
};
