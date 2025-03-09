'use client';

import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, SocialIcons, FooterText } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <a
          href="https://www.instagram.com/lacrei.saude"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/lacrei.saude"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/company/lacrei-saude"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </SocialIcons>
      <FooterText>
        © 2025 Lacrei Saúde - Todos os direitos reservados
      </FooterText>
    </FooterContainer>
  );
}
