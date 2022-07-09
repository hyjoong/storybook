import styled from "@emotion/styled";

const SpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerSVG = styled.svg`
  width: 32px;
  height: 32px;
  fill: gray;
  color: transparent;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default { SpinnerBox, SpinnerSVG };
