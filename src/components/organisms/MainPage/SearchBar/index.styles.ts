import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32rem;
  padding: 0.25rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;

  .line {
    border-left: 1px solid lightgray;
    height: 20px;
    width: 5px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  margin: 0 0.5rem;

  input {
    width: 100%;
  }

  .icon {
    margin-right: 0.5rem;
  }

  &.nickname {
    width: 12rem;
  }

  &.url {
    flex-grow: 1;
  }
`