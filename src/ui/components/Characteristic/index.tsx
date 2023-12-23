import React from 'react';

import {
  Title,
  Subtitle,
  Container,

} from './style';

export type CharacteristicProps = {
  hasRightBorder?: Boolean;
}

export const Characteristic:
  React.FC<CharacteristicProps> = ({ hasRightBorder }: CharacteristicProps) => (

    <Container borderRight={hasRightBorder}>
      <div className="content">
        <Title>wind speed</Title>
        <Subtitle>5.1 m/s</Subtitle>
      </div>

    </Container>
  );
