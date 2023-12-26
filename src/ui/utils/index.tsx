import { ReactNode } from 'react';

import { CSSProperties } from 'styled-components';
import { Forecast } from '../../api/index';
import {
  Moon,
  MoonCloud, MoonCloudRain, Sun, SunCloud, SunCloudRain,
} from '../assets';

export const getCurrentWeater = (text: string, color: string): JSX.Element => {
  const now = new Date();
  const currentHour = now.getHours();
  const isSun = currentHour <= 17;

  const style: CSSProperties = {
    width: '120px',
    height: '120pxpx',
    position: 'relative',
    bottom: '8px',
    fill: color,
  };
  return chooseIcon(text, isSun, style);
};

export const iconFactory = (forecast: Forecast, time: number): ReactNode => {
  const isSun = time <= 17;
  const { hour } = forecast;
  if (hour.length <= 0 || hour.length >= 24) {
    return isSun ? <Sun /> : <Moon />;
  }

  const { text } = hour[time].condition;
  return chooseIcon(text, isSun);
};

export const chooseIcon = (text: string, isSun: boolean, style?: CSSProperties): JSX.Element => {
  const icon = getCondition(text);

  if (isSun) {
    switch (icon) {
      case 1:
        return <SunCloud style={style} />;
      case 2:
        return <SunCloudRain style={style} />;
      default:
        return <Sun style={style} />;
    }
  } else {
    switch (icon) {
      case 1:
        return <MoonCloud style={style} />;
      case 2:
        return <MoonCloudRain style={style} />;
      default:
        return <Moon style={style} />;
    }
  }
};

export const getCondition = (text: string): number => {
  const textLower = text.toLowerCase();

  if (textLower.indexOf('clear') !== -1) return 0;
  const hasOne = ['cloud', 'overcast', 'partly', 'snow'].some((value) => textLower.indexOf(value) !== -1);
  if (hasOne) return 1;
  if (textLower.indexOf('rain')) return 2;
  return 0;
};
