export type AstronomyData = {
    astronomy: AstronomyDetails;
}

export type AstronomyDetails = {
    astro: {
        sunrise: string;
        sunset: string;
    };
}

export const AstronomyDetailsDefault: AstronomyDetails = {
  astro: {
    sunrise: '00 AM',
    sunset: '00 PM',
  },
};
