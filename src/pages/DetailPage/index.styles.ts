import styled from 'styled-components';
import { BasicWrapper } from '../../components/atoms/BasicWrapper/index.styles';

export const Wrapper = styled(BasicWrapper)`
  align-items: flex-start;
  width: 40rem;
  height: 100%;
  margin: 5rem auto;
` 

export const TitleWrapper = styled(BasicWrapper)`
  align-items: flex-start;

  h1 {
    margin-bottom: 0.75rem;
  }
`

export const IntroWrapper = styled(BasicWrapper)`
  align-items: flex-start;
  margin: 1rem 0 3rem 0;
  line-height: 1.5;
`

export const ContentWrapper = styled(BasicWrapper)`
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 25rem;
`