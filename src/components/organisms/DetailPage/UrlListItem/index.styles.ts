import styled from "styled-components";
import { BasicCard } from './../../../atoms/BasicCard/index.styles';

export const Wrapper = styled(BasicCard)`
  align-items: flex-start;
  width: 100%;
  padding: 1.5rem 2rem;
  margin: 0.75rem 0;
  cursor: pointer;

  > p {
    text-overflow: ellipsis;
  }

  :hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05);
  }
`

export const UpperSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const DateWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.75rem;

  .line {
    width: 1.5px;
    height: 1rem;
    margin: 0 1.25rem;
    border-left: 1.5px solid lightgray;
  }
`