import styled from "styled-components";
import { BasicCard } from '../../../../atoms/BasicCard/index.styles';
import { BasicWrapper } from '../../../../atoms/BasicWrapper/index.styles';

export const NotHovered = styled(BasicWrapper)`
  align-items: flex-start;

  h4:nth-child(2) {
    margin: 0.75rem 0 0.375rem 0;
  }

  p {
    -webkit-line-clamp: 2;
  }
  
  svg {
    margin: auto 0 0 auto;
    stroke-width: 2.5;
  }
`

export const Hovered = styled(BasicWrapper)<{ colors: Array<string> }>`
  justify-content: center;

  div {
    display: flex;
    padding: 1.25rem;
    cursor: pointer;
    color: ${({ colors }) => colors[0]};
    
    p {
      margin-left: 0.5rem;
      color: inherit;
    }

    :hover {
      color: ${({ colors }) => colors[1]};
    }
  }
`

export const WishlistItemWrapper = styled(BasicCard)`
  width: 10rem;
  height: 12.5rem;
  padding: 1.75rem 1.5rem;
  margin: 0 0.5rem;

  ${NotHovered}, ${Hovered} {
    width: 100%;
    height: 100%;

    p {
    display: -webkit-box;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    }
  }
`