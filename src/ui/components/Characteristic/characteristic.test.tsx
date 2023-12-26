import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import { Characteristic } from './index';

import { rainy } from '../../styles/theme';

jest.mock('../../hooks/theme', () => ({
  useWeatherTheme: () => ({
    theme: {
      colors: {
        icon: 'mockedIconColor',
        primary: 'primaryColor',
      },
    },
  }),
}));

describe('Characteristic component', () => {
  it('renders  with title and value', () => {
    render(
      <ThemeProvider theme={rainy}>
        <Characteristic title="wind speed" value="5.2 m/s" />
        ,
      </ThemeProvider>,
    );

    const speed = screen.getByText('wind speed');
    const value = screen.getByText('5.2 m/s');

    expect(speed).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
