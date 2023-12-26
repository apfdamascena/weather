import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Weather } from '../ui/pages';

export const PublicRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/weather/:city" element={<Weather />} />
  </Routes>
);
