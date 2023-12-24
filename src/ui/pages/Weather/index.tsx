import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';

import {
  AstronomyInfoDefault, ForecastContent, HourForecast, WeatherInfoDefault, weatherApi,
} from '../../../api/weather-api';
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

  const searchCity = city || '';

  const [weatherInfo, setWeatherInfo] = useState(WeatherInfoDefault);
  const [astronomyInfo, setAstronomyInfo] = useState(AstronomyInfoDefault);
  const [forecast, setForecast] = useState<ForecastContent>();
  const [hours, setHours] = useState<HourForecast[]>();

  const userTapGoBack = () => {
    navigate(-1);
  };

  const getWeather = async () => {
    const response = await weatherApi.getForecastFrom(searchCity);
    console.log(response);
    if (response) {
      setWeatherInfo(response.current);
      setAstronomyInfo(response.forecast.forecastday[0]);
      setForecast(response.forecast.forecastday[0]);
      setHours(response.forecast.forecastday[0].hour);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

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
          <Subtitle>{weatherInfo.condition.text}</Subtitle>
        </TitleWrapper>

        <TemperatureDescriptionWrapper>

          <TemperatureWrapper>
            {
              (weatherInfo.temp_c < 0 && <Temperature className="signal">-</Temperature>)
            }

            <Temperature>{Math.abs(weatherInfo.temp_c)}</Temperature>
          </TemperatureWrapper>

          <DescriptionWrapper>
            <GrausWrapper>
              <Content className="grau">&deg;</Content>
              <Content className="unidade">C</Content>
            </GrausWrapper>

            <ThermalRangeWrapper>

              <ThermalRange up temperature={`${forecast?.day.maxtemp_c.toFixed(0) || 0}`} />
              <ThermalRange temperature={`${forecast?.day.mintemp_c.toFixed(0) || 0}`} />

            </ThermalRangeWrapper>

          </DescriptionWrapper>

        </TemperatureDescriptionWrapper>

      </InfoPlaceContainer>

      <Image src={Rainy} alt="rainy" />

      <ForecastWrapper>
        <Forecast title="dawn" value={`${hours ? hours[2].temp_c : '--'}`} />
        <Forecast title="morning" value={`${hours ? hours[8].temp_c : '--'}`} />
        <Forecast title="afternoon" value={`${hours ? hours[14].temp_c : '--'}`} />
        <Forecast title="night" value={`${hours ? hours[20].temp_c : '--'}`} />
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
