export type WeatherData = {
    current: WeatherDetails;
}

export type WeatherDetails = {
    humidity: number;
    wind_kph: number;
    temp_c: number;
    condition: {
      text: string;
    }
}

export const WeatherDetailsDefault: WeatherDetails = {
  humidity: 0,
  wind_kph: 0.0,
  temp_c: 0,
  condition: {
    text: 'unkown',
  },
};
