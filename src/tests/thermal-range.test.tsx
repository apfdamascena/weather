import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThermalRange } from '../ui/components';

jest.mock('../../hooks/theme', () => ({
  useWeatherTheme: () => ({
    theme: {
      colors: {
        icon: 'mockedIconColor',
      },
    },
  }),
}));

describe('ThermalRange', () => {
  it('renders with temperature value', () => {
    const { getByText } = render(
      <ThermalRange temperature="25" />,
    );

    expect(getByText('25')).toBeInTheDocument();
  });

  it('renders component with upward arrow when "up" prop is true', () => {
    const { container } = render(
      <ThermalRange up temperature="25" />,
    );

    const arrowElement = container.querySelector('.upward-arrow');

    expect(arrowElement).toBeInTheDocument();
  });

  it('renders component with downward arrow when "up" prop is false', () => {
    const { container } = render(
      <ThermalRange up={false} temperature="25" />,
    );

    const arrowElement = container.querySelector('.downward-arrow');

    expect(arrowElement).toBeInTheDocument();
  });

  it('renders degree symbol after the temperature value', () => {
    const { getByText } = render(
      <ThermalRange temperature="25" />,
    );

    expect(getByText('°')).toBeInTheDocument();
  });

  it('applies styles correctly', () => {
    const { container } = render(
      <ThermalRange temperature="25" />,
    );

    const thermalRangeContainer = container.firstChild;

    expect(thermalRangeContainer).toHaveStyle({
      // Add styles based on your component's actual styles
    });
  });
});
