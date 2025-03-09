import styled from 'styled-components';

export const StyledButton = styled.button<{ variant?: 'outlined' }>`
  background: ${({ theme, variant }) =>
    variant === 'outlined' ? 'transparent' : theme.colors.primary};
  color: ${({ theme, variant }) =>
    variant === 'outlined' ? theme.colors.primary : 'white'};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 12px 25px;
  }
`;
