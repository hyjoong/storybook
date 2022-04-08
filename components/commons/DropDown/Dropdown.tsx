import React, { useRef, useState } from "react";

import Styled from "./Dropdown.styles";

export interface Props {
  children: React.ReactNode;
}

const Dropdown = ({ children }) => {
  const [isTrigger, setIsTrigger] = useState(false);
  const ref = useRef();

  const toggle = () => {
    setIsTrigger(!isTrigger);
  };

  return (
    <Styled.Root ref={ref}>
      <Styled.ToggleButton
        onClick={toggle}
        isTrigger={isTrigger}
      ></Styled.ToggleButton>
      <Styled.Menu isTrigger={isTrigger}>{children}</Styled.Menu>
    </Styled.Root>
  );
};

export default Dropdown;
