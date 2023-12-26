import styled from 'styled-components';

export type ContainerProps = {
    borderRight?: Boolean;
    borderColor: string;
}

export const Container = styled.div<ContainerProps>`

    position: relative;

    ${({ borderRight, borderColor }) => borderRight
    && `
      &::after {
        content: '';
        position: absolute;
        top: 10px; /* Ajuste para a posição inicial da borda lateral direita */
        right: 0;
        height: calc(100% - 20px); /* Altura da borda lateral direita */
        width: 1px; /* Largura da borda lateral direita */
        background-color: ${borderColor}; /* Cor da borda lateral direita */
      }
    `}

`;

export const Title = styled.p`
  font-size: 0.9rem;
  font-weight: 100;
  letter-spacing: 0.8px;

  color: ${({ theme }) => theme.colors.secondary};

  text-align: center;

  margin-bottom: 4px;
`;

export const Subtitle = styled.p`

  text-align: center;
  font-size: 0.9rem;
  font-weight: 200;
  letter-spacing: 1px;

  color: ${({ theme }) => theme.colors.primary};


`;
