import React from 'react';

import { useWeatherTheme } from '../../hooks/theme';
import {
  Container,
  Title,
  DescriptionWrapper,
  Label,
} from './style';

export type ForecastProps = {
  title: string;
  value: string;
  children: React.ReactNode;
};

export const Forecast: React.FC<ForecastProps> = ({
  title, value, children,
}: ForecastProps) => {
  const { theme } = useWeatherTheme();

  const iconStyle = {
    fill: theme.colors.icon,
    width: '50px',
    height: '50px',
    stroke: theme.colors.icon,
  };

  return (
    <Container>

      <Title>{title}</Title>
      {
        React.cloneElement(children as React.ReactElement, { style: iconStyle })
      }
      <DescriptionWrapper>
        <Label>{value}</Label>
        <Label className="degree">&deg;</Label>
        <Label>C</Label>
      </DescriptionWrapper>

    </Container>

  );
};
