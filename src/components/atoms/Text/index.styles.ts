import styled from 'styled-components';
import { FONT_SIZE } from '../../../constants/styles';

export type TTextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'lg' | 'base' | 'sm' | 'xs';
export interface IText {
  variant: TTextVariant;
  color?: string;
  weight?: number;
}

export const Text = styled.p<IText>`
  font-size: ${({ variant }) => FONT_SIZE[variant]};
  color: ${({ theme, color }) => color || theme.textColor};
  font-weight: ${({ weight }) => weight};
`;
