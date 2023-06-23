import styled from 'styled-components';

export interface IText {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'lg' | 'base' | 'sm' | 'xs';
  color?: string;
  weight?: number;
}

export const Text = styled.p<IText>`
  font-size: ${({ variant }) => variant};
  color: ${({ theme, color }) => color || theme.textColor};
  font-weight: ${({ weight }) => weight};
`;
