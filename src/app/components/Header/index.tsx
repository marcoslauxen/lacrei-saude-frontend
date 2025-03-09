'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { HeaderContainer, Logo, MenuButton, NavLinks } from './styles';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>Lacrei Saúde</Logo>
      </Link>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      <NavLinks isOpen={menuOpen}>
        <Link
          href="/"
          className={pathname === '/' ? 'active' : ''}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/user"
          className={pathname === '/user' ? 'active' : ''}
          onClick={() => setMenuOpen(false)}
        >
          Pessoa Usuária
        </Link>
        <Link
          href="/professional"
          className={pathname === '/professional' ? 'active' : ''}
          onClick={() => setMenuOpen(false)}
        >
          Profissional
        </Link>
      </NavLinks>
    </HeaderContainer>
  );
}
