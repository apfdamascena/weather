import React from 'react';

import {
  Title,
  Subtitle,
  Container,

} from './style';

export type CharacteristicProps = {
  hasRightBorder?: Boolean;
  title: string;
  value: string;
}

export const Characteristic:
  React.FC<CharacteristicProps> = ({ hasRightBorder, title, value }: CharacteristicProps) => (

    <Container borderRight={hasRightBorder}>
      <div className="content">
        <Title>{title}</Title>
        <Subtitle>{value}</Subtitle>
      </div>
    </Container>
  );
