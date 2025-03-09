import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 30px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-top: 3px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
  margin-top: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  font-size: 28px;

  a {
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.border};
      transform: scale(1.2);
    }
  }
`;

export const FooterText = styled.p`
  font-size: 16px;
  font-weight: bold;
  opacity: 0.9;
`;
