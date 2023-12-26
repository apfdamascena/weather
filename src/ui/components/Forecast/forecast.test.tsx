import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';

import { rainy } from '../../styles/theme';
import { Forecast } from './index';

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

describe('Forecast Component', () => {
  it('renders with title, value, icon', () => {
    render(
      <ThemeProvider theme={rainy}>
        <Forecast title="Temperature" value="25" data-testid="forecast">
          <div data-testid="mocked-icon" />
        </Forecast>

      </ThemeProvider>,

    );

    const title = screen.getByText('Temperature');
    const value = screen.getByText('25');
    const icon = screen.getByTestId('mocked-icon');

    expect(title).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    render(
      <ThemeProvider theme={rainy}>
        <Forecast title="Temperature" value="25" data-testid="forecast">
          <div data-testid="mocked-icon" />
        </Forecast>
        ,
      </ThemeProvider>,
    );

    const mockedIcon = screen.getByTestId('mocked-icon');

    expect(mockedIcon).toHaveStyle({
      width: '50px',
      height: '50px',
    });
  });

  it('renders temperature with degree and "C"', () => {
    render(
      <ThemeProvider theme={rainy}>
        <Forecast title="Temperature" value="25" data-testid="forecast">
          <div data-testid="mocked-icon" />
        </Forecast>
      </ThemeProvider>,

    );

    const temperature = screen.getByText('Temperature');
    const degree = screen.getByText('°');
    const celsius = screen.getByText('C');

    expect(temperature).toBeInTheDocument();
    expect(degree).toBeInTheDocument();
    expect(celsius).toBeInTheDocument();
  });
});
