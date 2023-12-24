import React from 'react';

import {
  Container,
  Image,
  Title,
  DescriptionWrapper,
  Label,
} from './style';
import { SunWithCloud } from '../../assets';

export type ForecastProps = {

  title: string;
  value: string;
};

export const Forecast: React.FC<ForecastProps> = ({ title, value }: ForecastProps) => (
  <Container>

    <Title>{title}</Title>
    <Image src={SunWithCloud} />
    <DescriptionWrapper>
      <Label>{value}</Label>
      <Label className="degree">&deg;</Label>
      <Label>C</Label>
    </DescriptionWrapper>

  </Container>
);
