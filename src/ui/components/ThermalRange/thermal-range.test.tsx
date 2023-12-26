import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import { rainy } from '../../styles/theme';
import { ThermalRange } from './index';

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

describe('ThermalRange', () => {
  it('renders with temperature value', () => {
    render(
      <ThemeProvider theme={rainy}>
        <ThermalRange temperature="25" />
      </ThemeProvider>,
    );

    const temperature = screen.getByText('25');
    expect(temperature).toBeInTheDocument();
  });

  it('renders component with upward arrow when "up" prop is true', () => {
    render(
      <ThemeProvider theme={rainy}>
        <ThermalRange up temperature="25" data-testid="thermal" />
      </ThemeProvider>,

    );

    const arrow = screen.getByTestId('ArrowRightAltIcon');

    expect(arrow).toHaveStyle({
      transform: 'rotate(-90deg)',
    });
  });

  it('renders component with upward arrow when "up" prop is false', () => {
    render(
      <ThemeProvider theme={rainy}>
        <ThermalRange temperature="25" data-testid="thermal" />
      </ThemeProvider>,

    );

    const arrow = screen.getByTestId('ArrowRightAltIcon');

    expect(arrow).toHaveStyle({
      transform: 'rotate(90deg)',
    });
  });
});
