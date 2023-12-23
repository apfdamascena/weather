import React from 'react';

import {
  Container,
  Image,
  Title,
  DescriptionWrapper,
  Label,
} from './style';
import { SunWithCloud } from '../../assets';

export const Forecast: React.FC = () => (
  <Container>

    <Title>dawn</Title>
    <Image src={SunWithCloud} />
    <DescriptionWrapper>
      <Label>20</Label>
      <Label className="degree">&deg;</Label>
      <Label>C</Label>
    </DescriptionWrapper>

  </Container>
);
