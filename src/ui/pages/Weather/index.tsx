import React from 'react';

import { Helmet } from 'react-helmet';
import {
  Container, WeatherArrowBack, Title, InfoPlaceContainer,
  Subtitle, TemperatureDescriptionWrapper,
  TemperatureWrapper, Temperature, TitleWrapper,
  DescriptionWrapper, GrausWrapper, Content,
  ThermalRangeWrapper, Image, ForecastWrapper,
  PlaceCharacteristicWrapper,
} from './style';
import { Characteristic, ThermalRange } from '../../components';
import { Rainy } from '../../assets';
import { Forecast } from '../../components/Forecast';

export const Weather: React.FC = () => (
  <Container>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Check temperature</title>
    </Helmet>

    <WeatherArrowBack />

    <InfoPlaceContainer>

      <TitleWrapper>
        <Title>LONDON</Title>
        <Subtitle>rainy</Subtitle>
      </TitleWrapper>

      <TemperatureDescriptionWrapper>

        <TemperatureWrapper>
          <Temperature>17</Temperature>
        </TemperatureWrapper>

        <DescriptionWrapper>
          <GrausWrapper>
            <Content className="grau">&deg;</Content>
            <Content className="unidade">C</Content>
          </GrausWrapper>

          <ThermalRangeWrapper>

            <ThermalRange value="dawn" />
            <ThermalRange value="teste" />

          </ThermalRangeWrapper>

        </DescriptionWrapper>

      </TemperatureDescriptionWrapper>

    </InfoPlaceContainer>

    <Image src={Rainy} alt="rainy" />

    <ForecastWrapper>
      <Forecast />
      <Forecast />
      <Forecast />
      <Forecast />
    </ForecastWrapper>

    <PlaceCharacteristicWrapper>

      <Characteristic hasRightBorder />
      <Characteristic hasRightBorder />
      <Characteristic hasRightBorder />
      <Characteristic />
    </PlaceCharacteristicWrapper>

  </Container>
);
