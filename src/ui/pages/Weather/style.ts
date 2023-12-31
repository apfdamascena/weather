import styled from 'styled-components';
import { ArrowBack } from '@mui/icons-material';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
  gap: 32px;

`;

export const WeatherArrowBack = styled(ArrowBack)`
  align-self: flex-start;

  margin-top: 16px !important;
  margin-left: 12px !important;
  font-size: 32px !important;
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
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    font-weight: 350;
    letter-spacing: 2px;
    line-height: 1;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 100;
  line-height: 1;
  letter-spacing: 1.5px;  
`;

export const TemperatureDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  
  justify-content: center;

  width: 90%;
`;

export const TemperatureWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

export type DescriptionWrapperProps = {
  positive: boolean;
}

export const DescriptionWrapper = styled.div`
  
  position: relative;
  right: 3px;
  top: 0.09rem;

  @media (min-width:600px) {

    top: 0.3rem;
  }


`;

export const ThermalRangeWrapper = styled.div`

  margin-top: 8px;
`;

export const Temperature = styled.p`
  font-size: 7.6rem;
  line-height: 0.8;
  font-weight: 300;

  &.signal {
    font-size: 5rem;
    font-weight: 400;
  }
`;

export const GrausWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Content = styled.span`

  position: relative;
  right: 4px;
  bottom: 4px;

  &.weather-degree {

    font-size: 13px;
    margin-top: 5px;
    margin-right: 3px;
    font-weight: 300;

  }

  &.weather-unity {

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
  position: relative;
  bottom: 8px;


  @media (min-width: 560px) {
  
    width: 440px;
    bottom: 4px;

  }
`;

export const PlaceCharacteristicWrapper = styled.div`

  width: 98%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  
  @media (min-width: 560px) {
    width: 440px;
    position: relative;
    bottom: 4px;
  }
`;
