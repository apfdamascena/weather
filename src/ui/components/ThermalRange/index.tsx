import React from 'react';

import {
  Label,
} from './style';

type TitleProps = {
    value: string;
}

export const ThermalRange: React.FC<TitleProps> = ({ value } : TitleProps) => (
  <Label>{value}</Label>
);
