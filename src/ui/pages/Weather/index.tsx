/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';

import { useWeatherTheme } from '../../hooks/theme';
import { Moon, Sun } from '../../assets';

import { getCurrentWeater, chooseIcon } from '../../utils';
import { ForecastDefault, ForecastData } from '../../../api';
import { weatherApi } from '../../../api/weather-api';

import { Characteristic, ThermalRange } from '../../components';
import { Forecast } from '../../components/Forecast';

import {
  Container,
  WeatherArrowBack,
  Title, InfoPlaceContainer,
  Subtitle, TemperatureDescriptionWrapper,
  TemperatureWrapper, Temperature,
  TitleWrapper, DescriptionWrapper,
  GrausWrapper, Content,
  ThermalRangeWrapper, ForecastWrapper,
  PlaceCharacteristicWrapper,
} from './style';

type ForecastComponent = {
  title: string;
  time: number;
}

export const Weather: React.FC = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const { theme, toggleTheme } = useWeatherTheme();

  const [weather, setWeather] = useState<ForecastData>(ForecastDefault);

  const weatherDetails = weather.current;
  const forecastday = weather.forecast.forecastday[0];
  const maximumTemperature = forecastday.day.maxtemp_c;
  const minimumTemperature = forecastday.day.mintemp_c;
  const condition = weatherDetails.condition.text;

  const forecastComponents: ForecastComponent[] = [
    { title: 'dawn', time: 2 },
    { title: 'morning', time: 8 },
    { title: 'afternoon', time: 14 },
    { title: 'night', time: 20 },
  ];

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

  useEffect(() => {
    toggleTheme(condition, weatherDetails.temp_c);
  }, [condition]);

  const getTemperatureFor = (time: number): string => {
    const { hour } = forecastday;
    if (!hour || hour.length < 24) return '--';
    return `${hour[time].temp_c}`;
  };

  const iconFactory = (time: number): ReactNode => {
    const isSun = time <= 17;
    const { hour } = forecastday;
    if (hour.length <= 0 || hour.length > 24) {
      return isSun ? <Sun /> : <Moon />;
    }

    const { text } = hour[time].condition;
    return chooseIcon(text, isSun);
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
          <Subtitle>{condition}</Subtitle>
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
              <Content className="weather-degree">&deg;</Content>
              <Content className="weather-unity">C</Content>
            </GrausWrapper>

            <ThermalRangeWrapper>

              <ThermalRange up temperature={`${maximumTemperature}`} />
              <ThermalRange temperature={`${minimumTemperature}`} />

            </ThermalRangeWrapper>

          </DescriptionWrapper>

        </TemperatureDescriptionWrapper>

      </InfoPlaceContainer>

      {
        getCurrentWeater(condition, theme.colors.primary)
      }

      <ForecastWrapper>
        {
          forecastComponents.map(({ time, title }) => (
            <Forecast title={title} value={getTemperatureFor(time)} key={title}>
              {
                iconFactory(time)
              }
            </Forecast>
          ))
        }
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
