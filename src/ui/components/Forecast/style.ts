import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-top: 8px;
    
    gap: 4px;
    
`;

export const Title = styled.p`
  font-weight: 200;
  font-size: 1rem;
`;

export const Image = styled.img`
  width: 50%;

  @media (min-width:480px) {
    width: 60px;
  }

`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1px;

  margin-top: 4px;
`;

export const Label = styled.p`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1.1rem;
    
    font-weight: 200;
    letter-spacing: 1px;

    &.degree {

        font-size: 9px;
        margin-bottom: 6px;
        margin-left: 1px;
    }
`;
