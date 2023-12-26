import 'dotenv/config';

import { z } from 'zod';

const variables = z.object({
  REACT_APP_PROJECT_NAME: z.string(),
  REACT_APP_SERVER_PORT: z.string(),
  REACT_APP_WEATHER_API_KEY: z.string(),
});

const ENV_VARIABLES = variables.safeParse(process.env);

if (ENV_VARIABLES.success === false) {
  throw new Error(`problema ao ler .env. Detalhes: ${ENV_VARIABLES.error.message}`);
}

export const env = ENV_VARIABLES.data;
