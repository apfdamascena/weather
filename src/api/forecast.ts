import { WeatherDetails, WeatherDetailsDefault } from './weather';
import { AstronomyDetailsDefault } from '.';

export type ForecastDetails = {
    forecastday: Forecast[]
  };

export type Forecast = {
    astro: {
      sunrise: string;
      sunset: string;
    }

    day: {
      maxtemp_c: number;
      mintemp_c: number;
    }

    hour: HourForecast[];
  };

export type HourForecast = {
    temp_c: number;
    condition: {
      text: string;
    }
  }

export type ForecastData = {
    current: WeatherDetails;
    forecast: ForecastDetails;
  };

export const ForecastDefault: ForecastData = {

  current: WeatherDetailsDefault,
  forecast: {
    forecastday: [
      {
        ...AstronomyDetailsDefault,
        day: {
          maxtemp_c: 0,
          mintemp_c: 0,
        },
        hour: [],

      },
    ],
  },
};
