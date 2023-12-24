import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';

import { AstronomyInfoDefault, WeatherInfoDefault, weatherApi } from '../../../api/weather-api';
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

  const [weatherInfo, setWeatherInfo] = useState(WeatherInfoDefault);
  const [astronomyInfo, setAstronomyInfo] = useState(AstronomyInfoDefault);

  const userTapGoBack = () => {
    navigate(-1);
  };

  const getWeather = async () => {
    const searchCity = city || '';
    const { current } = await weatherApi.getWeatherFrom(searchCity);
    current.wind_kph /= 3.6;
    setWeatherInfo(current);
  };

  const getAstronomy = async () => {
    const searchCity = city || '';
    const { astronomy } = await weatherApi.getAstronomyFrom(searchCity);
    setAstronomyInfo(astronomy);
  };

  useEffect(() => {
    getWeather();
    getAstronomy();
  });

  return (
    <Container>

      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Check temperature
        </title>
      </Helmet>

      <WeatherArrowBack onClick={userTapGoBack} />

      <InfoPlaceContainer>

        <TitleWrapper>
          <Title>{city?.toUpperCase()}</Title>
          <Subtitle>rainy</Subtitle>
        </TitleWrapper>

        <TemperatureDescriptionWrapper>

          <TemperatureWrapper>
            <Temperature>{weatherInfo.temp_c}</Temperature>
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
        <Characteristic hasRightBorder title="wind speed" value={`${weatherInfo.wind_kph.toFixed(2)} m/s`} />
        <Characteristic hasRightBorder title="sunrise" value={astronomyInfo.astro.sunrise} />
        <Characteristic hasRightBorder title="sunset" value={astronomyInfo.astro.sunset} />
        <Characteristic title="humidity" value={`${weatherInfo.humidity}%`} />
      </PlaceCharacteristicWrapper>

    </Container>
  );
};
