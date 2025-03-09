import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 60px;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }
`;

export const Content = styled.div`
  max-width: 55%;

  h1 {
    font-size: 52px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 26px;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  div {
    display: flex;
    justify-content: start;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 45%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 30px;

    img {
      width: 100%;
    }
  }
`;
