import { DefaultTheme } from 'styled-components';
import { PALETTE } from '../constants/palette';

export const lightTheme: DefaultTheme = {
  bgColor: PALETTE.WHITE500,
  textColor: PALETTE.BLACK500,
  borderColor: PALETTE.WHITE300,
};

export const darkTheme: DefaultTheme = {
  bgColor: PALETTE.BLACK500,
  textColor: PALETTE.WHITE500,
  borderColor: PALETTE.BLACK300,
};
