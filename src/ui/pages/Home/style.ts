import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 8px;

`;

export const TitleWrapper = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 2px;  
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 1.4rem;
  font-weight: 250;
  letter-spacing: 1.5px;  
`;

export const Image = styled.img`
  width: 40%;

  @media (min-width:480px) {

    width: 230px;
  }

`;

export const PlacesContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;

  width: fit-content;
  max-width: 85%;
  min-width: 60%;

  margin-top: 16px;

  @media (min-width:720px) {
    
    max-width: 45%;
    min-width: 30%;
  }

`;

export const TextButton = styled.button`

  outline: none;
  border: none;
  padding: 8px 8px;
  background: none;
  color: ${({ theme }) => theme.colors.textWhite};

  font-weight: 200;
  letter-spacing: 1.4px;
  font-size: 1.1rem;

`;
