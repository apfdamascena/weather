import React, { useState } from 'react';
// import { ArrowBack } from '@mui/icons-material';

import { Helmet } from 'react-helmet';
import {
  Container, WeatherArrow,
} from './style';

export const Weather: React.FC = () => (
  <Container>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Check temperature</title>
    </Helmet>

    <WeatherArrow />

  </Container>
);
