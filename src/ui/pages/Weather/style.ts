import styled from 'styled-components';
import { ArrowBack, ArrowUpward, ArrowDownward } from '@mui/icons-material';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, rgba(43, 47, 61, 0.76) 14.92%, rgba(60, 65, 81, 0.64) 43.97%, rgba(62, 68, 84, 0.32) 72.23%, rgba(64, 70, 86, 0.00) 99.85%), #606977; 
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 

  gap: 40px;

`;

export const WeatherArrowBack = styled(ArrowBack)`
  align-self: flex-start;
  margin-top: 16px;
  margin-left: 16px;

  font-size: 32px !important;

    
`;

export const WeatherArrowUp = styled(ArrowUpward)`

`;

export const WeatherArrowDown = styled(ArrowDownward)`

`;

export const InfoPlaceContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  width: fit-content;

  gap: 22px;
`;

export const TitleWrapper = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 2.5rem;
    font-weight: 350;
    letter-spacing: 1px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: 1.5px;  
`;

export const TemperatureDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;

  width: 100%;
`;

export const TemperatureWrapper = styled.div`

  /* width: 90%; */
`;

export const DescriptionWrapper = styled.div`

  /* width: 10%; */

`;

export const Temperature = styled.p`
  font-size: 7.4rem;
  line-height: 0.8;
  font-weight: 400;
  font-family: Roboto, sans-serif;
`;

export const GrausWrapper = styled.div`

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;



  & .grau {

    font-size: 16px;
    margin-right: 2px;

  }

  & .unidade {

    font-size: 24px;

  }

`;

// export const Image = styled.img`
//   width: 40%;

//   @media (min-width:480px) {

//     width: 230px;
//   }

// `;

// export const PlacesContainer = styled.div`

//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 4px;

//   width: fit-content;
//   max-width: 85%;
//   min-width: 60%;

//   margin-top: 16px;

//   @media (min-width:720px) {

//     max-width: 45%;
//     min-width: 30%;
//   }

// `;

// export const TextButton = styled.button`

//   outline: none;
//   border: none;
//   padding: 8px 8px;
//   background: none;
//   color: ${({ theme }) => theme.colors.textWhite};

//   font-weight: 200;
//   letter-spacing: 1.4px;
//   font-size: 1.1rem;

// `;
