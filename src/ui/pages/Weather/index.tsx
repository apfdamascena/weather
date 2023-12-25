import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';

import { ForecastDefault, ForecastData } from '../../../api';
import { weatherApi } from '../../../api/weather-api';

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

  const [weather, setWeather] = useState<ForecastData>(ForecastDefault);

  const weatherDetails = weather.current;
  const forecastday = weather.forecast.forecastday[0];
  const maximumTemperature = forecastday.day.maxtemp_c;
  const minimumTemperature = forecastday.day.mintemp_c;

  const searchCity = city || '';

  const userTapGoBack = () => {
    navigate(-1);
  };

  const getWeather = async () => {
    const data = await weatherApi.getForecastFrom(searchCity);
    if (!data) return;
    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  const getTemperatureFor = (time: number): string => {
    const { hour } = forecastday;
    if (!hour || hour.length < 24) return '--';
    return `${hour[time].temp_c}`;
  };

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
          <Subtitle>{weatherDetails.condition.text}</Subtitle>
        </TitleWrapper>

        <TemperatureDescriptionWrapper>

          <TemperatureWrapper>
            {
              (weatherDetails.temp_c < 0 && <Temperature className="signal">-</Temperature>)
            }

            <Temperature>{Math.abs(weatherDetails.temp_c)}</Temperature>
          </TemperatureWrapper>

          <DescriptionWrapper>
            <GrausWrapper>
              <Content className="grau">&deg;</Content>
              <Content className="unidade">C</Content>
            </GrausWrapper>

            <ThermalRangeWrapper>

              <ThermalRange up temperature={`${maximumTemperature}`} />
              <ThermalRange temperature={`${minimumTemperature}`} />

            </ThermalRangeWrapper>

          </DescriptionWrapper>

        </TemperatureDescriptionWrapper>

      </InfoPlaceContainer>

      <Image src={Rainy} alt="rainy" />

      <ForecastWrapper>
        <Forecast title="dawn" value={getTemperatureFor(2)} />
        <Forecast title="morning" value={getTemperatureFor(8)} />
        <Forecast title="afternoon" value={getTemperatureFor(14)} />
        <Forecast title="night" value={getTemperatureFor(20)} />
      </ForecastWrapper>

      <PlaceCharacteristicWrapper>
        <Characteristic hasRightBorder title="wind speed" value={`${weatherDetails.wind_kph.toFixed(2)} m/s`} />
        <Characteristic hasRightBorder title="sunrise" value={forecastday.astro.sunrise} />
        <Characteristic hasRightBorder title="sunset" value={forecastday.astro.sunset} />
        <Characteristic title="humidity" value={`${weatherDetails.humidity}%`} />
      </PlaceCharacteristicWrapper>

    </Container>
  );
};
