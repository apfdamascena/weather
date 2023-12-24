import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
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

export const Weather: React.FC = () => {
  const navigate = useNavigate();
  const { city } = useParams();

  const [weather, setWeather] = useState('rainy');
  const [temperature, setTemperature] = useState(17);

  const userTapGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Check temperature</title>
      </Helmet>

      <WeatherArrowBack onClick={userTapGoBack} />

      <InfoPlaceContainer>

        <TitleWrapper>
          <Title>{city?.toUpperCase()}</Title>
          <Subtitle>{weather}</Subtitle>
        </TitleWrapper>

        <TemperatureDescriptionWrapper>

          <TemperatureWrapper>
            <Temperature>{`${temperature}`}</Temperature>
          </TemperatureWrapper>

          <DescriptionWrapper>
            <GrausWrapper>
              <Content className="grau">&deg;</Content>
              <Content className="unidade">C</Content>
            </GrausWrapper>

            <ThermalRangeWrapper>

              <ThermalRange />
              <ThermalRange />

            </ThermalRangeWrapper>

          </DescriptionWrapper>

        </TemperatureDescriptionWrapper>

      </InfoPlaceContainer>

      <Image src={Rainy} alt="rainy" />

      <ForecastWrapper>
        <Forecast title="dawn" value="-8" />
        <Forecast title="morning" value="-5" />
        <Forecast title="afternoon" value="-2" />
        <Forecast title="night" value="-7" />
      </ForecastWrapper>

      <PlaceCharacteristicWrapper>
        <Characteristic hasRightBorder title="wind speed" value="5.1 m/s" />
        <Characteristic hasRightBorder title="sunrise" value="5:14 AM" />
        <Characteristic hasRightBorder title="sunset" value="7:25 PM" />
        <Characteristic title="humidity" value="52%" />
      </PlaceCharacteristicWrapper>

    </Container>
  );
};
