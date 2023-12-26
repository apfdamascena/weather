import axios from 'axios';

export type WeatherParams = {
  city: string;
}

export class AxiosAdapter {
  private readonly instance;

  constructor(url: string, key: string) {
    this.instance = axios.create({
      baseURL: url,
      params: {
        key,
      },
    });
  }

  async get<T>(path: string, params: WeatherParams): Promise<T | undefined> {
    try {
      const response = await this.instance.get(path, {
        params: {
          q: params.city,
        },
      });
      const data = response.data as T;
      return data;
    } catch (error) {
      return undefined;
    }
  }
}
