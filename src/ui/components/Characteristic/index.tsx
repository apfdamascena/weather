import React from 'react';

import { useWeatherTheme } from '../../hooks/theme';
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
  React.FC<CharacteristicProps> = ({ hasRightBorder, title, value }: CharacteristicProps) => {
    const { theme } = useWeatherTheme();
    return (
      <Container borderRight={hasRightBorder} borderColor={theme.colors.rightBorderColor}>
        <div className="content">
          <Title>{title}</Title>
          <Subtitle>{value}</Subtitle>
        </div>
      </Container>
    );
  };

Characteristic.defaultProps = {
  hasRightBorder: false,
};
