import { ElementType } from 'react';
import * as S from './index.styles';

export interface ITextProps extends S.IText {
  children: React.ReactNode;
}

/**
 *
 * @param {React.ReactNode} children children
 * @param {string} variant font-size
 * @param {string?} color color
 * @param {string?} weight font-weight
 */
const Text = (props: ITextProps) => {
  const { children, variant } = props;
  const tag = variant.startsWith('h') ? variant : 'p';

  return (
    <S.Text as={tag as ElementType} {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
