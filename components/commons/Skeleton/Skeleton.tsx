import styled from "styled-components";
import { SHAPE, shine } from "./Skeleton.styles";

export interface Props extends React.CSSProperties {
  type?: "CARD" | "SQUARE" | "CIRCLE" | "TEXT";
  size?: "X_SMALL" | "SMALL" | "MEDIUM" | "LARGE" | "X_LARGE";
}

const Skeleton = styled.div<Props>`
  ${({ type, size }) => type && size && SHAPE[type][size]}

  ${({ width }) => `width: ${width ?? ""}`};
  ${({ height }) => `height: ${height ?? ""}`};

  ${({ margin }) => `margin: ${margin}`};

  background-color: #dbdbdb;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0)
  );
  background-size: 6rem 100%;
  background-repeat: no-repeat;
  background-position: left -6rem top 0;
  animation: ${shine} 1.3s ease-in-out infinite;
`;

export default Skeleton;
