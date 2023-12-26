/* eslint @typescript-eslint/no-empty-interface: "off", curly: "error" */

import 'styled-components';
import { ThemeState } from '../hooks/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeState {}
}
