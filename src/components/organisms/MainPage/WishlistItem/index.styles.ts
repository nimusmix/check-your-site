import styled from "styled-components";
import { BasicWrapper } from './../../../atoms/BasicWrapper/index.styles';

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
  display: none;
  justify-content: center;

  div {
    display: flex;
    margin: 1.25rem;
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

export const WishlistItemWrapper = styled(BasicWrapper)`
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  
  width: 10rem;
  height: 12.5rem;
  padding: 1.75rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 1.25rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  
  ${NotHovered}, ${Hovered} {
    height: 100%;

    p {
    display: -webkit-box;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
  }
  
  &.hovered {
    ${NotHovered} {
      display: none;
    }

    ${Hovered} {
      display: flex;
    }
  }
`