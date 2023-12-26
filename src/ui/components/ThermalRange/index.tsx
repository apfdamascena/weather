/* eslint-disable react/require-default-props */
import React from 'react';

import {
  ArrowRange, Container, Label,
} from './style';

type ThermalRangeProps = {
    up?: boolean;
    temperature: string;
}

export const ThermalRange: React.FC<ThermalRangeProps> = ({
  up,
  temperature,
}: ThermalRangeProps) => (
  <Container>
    <ArrowRange arrowgoesto={up ? 'true' : undefined} />
    <Label className="amount">{temperature}</Label>
    <Label className="degree">&deg;</Label>
  </Container>
);
