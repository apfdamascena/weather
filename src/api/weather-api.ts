import { env } from '../env';
import { AxiosAdapter } from './axios';

export type WeatherData = {
    current: WeatherInfo;
}

export type WeatherInfo = {
    humidity: number;
    wind_kph: number;
    temp_c: number;
    condition: {
      text: string;
    }
}

export const WeatherInfoDefault: WeatherInfo = {
  humidity: 0,
  wind_kph: 0.0,
  temp_c: 0,
  condition: {
    text: 'unkown',
  },
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

export type ForecastData = {
  current: WeatherInfo;
  forecast: ForecastInfo;
};

export type ForecastInfo = {
  forecastday: ForecastContent[]
};

export type ForecastContent = {
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

    // async getWeatherFrom(city: string): Promise<WeatherData> {
    //   const weather = await this.api.get<WeatherData>('/current.json', {
    //     city,
    //   });
    //   return weather || { current: WeatherInfoDefault };
    // }

    // async getAstronomyFrom(city: string): Promise<AstronomyData> {
    //   const astronomy = await this.api.get<AstronomyData>('/astronomy.json', {
    //     city,
    //   });

    //   return astronomy || { astronomy: AstronomyInfoDefault };
    // }

    async getForecastFrom(city: string): Promise<ForecastData | undefined> {
      const forecast = await this.api.get<ForecastData>('/forecast.json', {
        city,
      });
      return forecast;
    }
}

const axiosAdapter = new AxiosAdapter('https://api.weatherapi.com/v1', env.REACT_APP_WEATHER_API_KEY);
export const weatherApi = new WeatherApi(axiosAdapter);
