import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1.6rem;
    font-weight: 300;
    font-style: italic;
    letter-spacing: 2px;  
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textGray};
  font-size: 1.2rem;

`;
