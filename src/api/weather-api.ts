import { env } from '../env';
import { AxiosAdapter } from './axios';

export type WeatherData = {
    current: WeatherInfo;
}

export type WeatherInfo = {
    humidity: number;
    wind_kph: number;
    temp_c: number;
}

export const WeatherInfoDefault: WeatherInfo = {
  humidity: 0,
  wind_kph: 0.0,
  temp_c: 0,
};

export type AstronomyData = {
  astronomy: AstronomyInfo;
}

export type AstronomyInfo = {
  astro: {
    sunrise: string;
    sunset: string;
  };
}

export const AstronomyInfoDefault: AstronomyInfo = {
  astro: {
    sunrise: '00 AM',
    sunset: '00 PM',
  },
};

export class WeatherApi {
    private readonly api: AxiosAdapter

    constructor(api: AxiosAdapter) {
      this.api = api;
    }

    async getWeatherFrom(city: string): Promise<WeatherData> {
      const weather = await this.api.get<WeatherData>('/current.json', {
        city,
      });

      return weather || { current: WeatherInfoDefault };
    }

    async getAstronomyFrom(city: string): Promise<AstronomyData> {
      const astronomy = await this.api.get<AstronomyData>('/astronomy.json', {
        city,
      });

      return astronomy || { astronomy: AstronomyInfoDefault };
    }
}

const axiosAdapter = new AxiosAdapter('https://api.weatherapi.com/v1', env.REACT_APP_WEATHER_API_KEY);
export const weatherApi = new WeatherApi(axiosAdapter);
