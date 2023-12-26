import { env } from '../env';
import { AxiosAdapter } from './axios';
import { ForecastData } from './forecast';

export class WeatherApi {
    private readonly api: AxiosAdapter

    constructor(api: AxiosAdapter) {
      this.api = api;
    }

    async getForecastFrom(city: string): Promise<ForecastData | undefined> {
      const forecast = await this.api.get<ForecastData>('/forecast.json', {
        city,
      });
      return forecast;
    }
}

const axiosAdapter = new AxiosAdapter('https://api.weatherapi.com/v1', env.REACT_APP_WEATHER_API_KEY);
export const weatherApi = new WeatherApi(axiosAdapter);
