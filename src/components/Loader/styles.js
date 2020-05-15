import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px;
`;

export const Loading = styled.div`
  border: ${(props) => `${props.border}px solid #f3f3f3`};
  border-top: ${(props) => `${props.border}px solid #ccc`};
  border-radius: 50%;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.width}px`};
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
