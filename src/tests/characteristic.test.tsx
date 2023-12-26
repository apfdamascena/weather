import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Characteristic } from '../ui/components';

jest.mock('../../hooks/theme', () => ({
  useWeatherTheme: () => ({
    theme: {
      colors: {
        rightBorderColor: 'mockedColor',
      },
    },
  }),
}));

describe('Characteristic component', () => {
  it('renders  with title and value', () => {
    const { getByText } = render(
      <Characteristic title="wind speed" value="5.2 m/s" />,
    );

    expect(getByText('wind speed')).toBeInTheDocument();
    expect(getByText('5.2 m/s')).toBeInTheDocument();
  });

  it('applies right border style when hasRightBorder', () => {
    const { container } = render(
      <Characteristic title="wind speed" value="5.2 m/s" hasRightBorder />,
    );

    const characteristicContainer = container.firstChild;
    expect(characteristicContainer).toHaveStyle('border-right: 1px solid mockedColor');
  });

  it('does not apply right border style when hasRightBorder not exists', () => {
    const { container } = render(
      <Characteristic title="wind speed" value="5.2 m/s" hasRightBorder={false} />,
    );

    const characteristicContainer = container.firstChild;
    expect(characteristicContainer).not.toHaveStyle('border-right: 1px solid mockedColor');
  });
});
