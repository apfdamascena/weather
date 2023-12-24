import styled from 'styled-components';
import { ArrowBack, ArrowUpward, ArrowDownward } from '@mui/icons-material';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, rgba(43, 47, 61, 0.68) 15.88%, rgba(60, 65, 81, 0.48) 39.18%, rgba(62, 68, 84, 0.02) 72.25%, rgba(64, 70, 86, 0.00) 99.85%), #606977;

  gap: 32px;

`;

export const WeatherArrowBack = styled(ArrowBack)`
  align-self: flex-start;

  margin-top: 16px !important;
  margin-left: 12px !important;
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


  gap: 24px;
`;

export const TitleWrapper = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 7px;

`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 2.5rem;
    font-weight: 350;
    letter-spacing: 2px;
    line-height: 1;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: 1.4rem;
  font-weight: 100;
  line-height: 1;
  letter-spacing: 1.5px;  
`;

export const TemperatureDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 90%;
`;

export const TemperatureWrapper = styled.div`
  margin-top: 8px;
`;

export const DescriptionWrapper = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: column;

`;

export const ThermalRangeWrapper = styled.div`

  margin-top: 8px;
`;

export const Temperature = styled.p`
  font-size: 7.8rem;
  line-height: 0.8;
  font-weight: 300;
`;

export const GrausWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Content = styled.span`

  &.grau {

    font-size: 13px;
    margin-top: 5px;
    margin-right: 3px;
    font-weight: 300;

  }

  &.unidade {

    font-size: 27px; 
    font-weight: 300;
  }

`;

export const Image = styled.img`
  width: 30%;

  @media (min-width:480px) {

    width: 145px;
  }
`;

export const ForecastWrapper = styled.div`

  width: 98%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 600px) {
  
    width: 440px;
  }
`;

export const PlaceCharacteristicWrapper = styled.div`

  width: 98%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (min-width: 600px) {
    width: 440px;
  }

`;
