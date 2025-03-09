import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background: white;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  position: relative;

  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

export const Logo = styled.h1`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 30px;

  a {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }

    &.active {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    a {
      width: 100%;
      text-align: center;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    display: block;
  }
`;
