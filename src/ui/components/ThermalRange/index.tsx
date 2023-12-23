import React from 'react';

import {
  ArrowRange, Container, Label,
} from './style';

// type TitleProps = {
//     value: string;
// }

export const ThermalRange: React.FC = () => (
  <Container>
    <ArrowRange />
    <Label className="amount">20</Label>
    <Label className="degree">&deg;</Label>

  </Container>
);
