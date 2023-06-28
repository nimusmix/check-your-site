import styled from 'styled-components';

export const Toast = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0.625rem 1rem;
  min-width: 5rem;
  bottom: 4rem;
  left: 50%;
  translate: -50%;
  z-index: 1100;
  pointer-events: all;

  text-align: center;
  border-radius: 0.5rem;
  color: white;
  background-color: #F85149;
  animation: slideDown 2000ms forwards, fadeOut 2000ms ease-out;

  p {
    margin-left: 0.375rem;
    color: inherit;
  }

  @keyframes slideDown {
    0%,
    100% {
      -webkit-transform: translateY(100px);
    }
    10%,
    90% {
      -webkit-transform: translateY(0px);
    }
  }

  @keyframes fadeOut {
    88% {
      opacity: 1;
    }
    95% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.1;
    }
  }
`;
