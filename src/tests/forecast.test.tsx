import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Forecast } from '../ui/components';

jest.mock('../../hooks/theme', () => ({
  useWeatherTheme: () => ({
    theme: {
      colors: {
        icon: 'mockedIconColor',
      },
    },
  }),
}));

describe('Forecast Component', () => {
  it('renders with title, value, icon', () => {
    const { getByText, getByTestId } = render(
      <Forecast title="Temperature" value="25" data-testid="forecast">
        <div data-testid="mocked-icon" />
      </Forecast>,
    );

    expect(getByText('Temperature')).toBeInTheDocument();
    expect(getByText('25')).toBeInTheDocument();
    expect(getByTestId('mocked-icon')).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    const { getByTestId } = render(
      <Forecast title="Temperature" value="25" data-testid="forecast">
        <div data-testid="mocked-icon" />
      </Forecast>,
    );

    const mockedIcon = getByTestId('mocked-icon');

    expect(mockedIcon).toHaveStyle({
      fill: 'mockedIconColor',
      width: '50px',
      height: '50px',
      stroke: 'mockedIconColor',
    });
  });

  it('renders temperature with degree and "C"', () => {
    const { getByText } = render(
      <Forecast title="Temperature" value="25" data-testid="forecast">
        <div data-testid="mocked-icon" />
      </Forecast>,
    );

    expect(getByText('25')).toBeInTheDocument();
    expect(getByText('°C')).toBeInTheDocument();
  });
});
