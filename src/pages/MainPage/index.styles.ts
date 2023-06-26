import styled from 'styled-components';
import { BasicWrapper } from '../../components/atoms/BasicWrapper/index.styles';

export const Wrapper = styled(BasicWrapper)`
  margin-top: 15rem;
`;

export const TitleWrapper = styled(BasicWrapper)`
  text-align: center;
  margin-bottom: 2.5rem;

  h1 {
    margin-bottom: 1rem;
    font-style: italic;
  }
`;

export const WishlistWrapper = styled(BasicWrapper)`
  flex-direction: row;
  margin-top: 3.5rem;
`