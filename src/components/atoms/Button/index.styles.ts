import { FONT_SIZE } from './../../../constants/styles';
import { TTextVariant } from './../Text/index.styles';
import styled from "styled-components";
import PALETTE from '../../../constants/palette';

export interface IButton {
  designType: 'fill' | 'empty';
  color: string;
  variant?: TTextVariant;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  width?: string;
}

export const Button = styled.button<IButton>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-size: ${({ variant }) => variant && FONT_SIZE[variant]};
  padding: ${({ padding }) => padding || '0.5rem 0.8rem'};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width || ''};
  border-radius: ${({ borderRadius }) => borderRadius || '0.5rem'};

  color: ${({ designType, color }) => designType === 'fill' ? PALETTE.WHITE500 : color};
  background-color: ${({ designType, color }) => designType === 'fill' ? color : 'inherit'};
  border: ${({ color }) => `0.8px ${color} solid`};
`