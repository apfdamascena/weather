import React from 'react';

import { Helmet } from 'react-helmet';
import {
  Container, WeatherArrowBack, Title, InfoPlaceContainer,
  Subtitle, TemperatureDescriptionWrapper,
  TemperatureWrapper, Temperature, TitleWrapper,
  DescriptionWrapper, GrausWrapper,
} from './style';
import { ThermalRange } from '../../components';

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
            <span className="grau">&deg;</span>
            <span className="unidade">C</span>
          </GrausWrapper>

          <ThermalRange value="dawn" />
          <ThermalRange value="teste" />

        </DescriptionWrapper>

      </TemperatureDescriptionWrapper>

    </InfoPlaceContainer>

  </Container>
);
