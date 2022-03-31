import React from "react";
import styled from "styled-components";
import Styled from "./Chip.styles";

export interface Props {
  className?: string;
  children: React.ReactNode;
}
const Chip = ({ className, children }: Props) => {
  return <Styled.Root className={className}>{children}</Styled.Root>;
};

const Dashed = styled(Chip)`
  border: 2px dashed #0fb6cc;
  line-height: 20px;
  color: #0fb6cc;
`;
const Solid = styled(Chip)`
  background: #0fb6cc;
  color: white;
  line-height: 24px;
`;

export default { Dashed, Solid };
