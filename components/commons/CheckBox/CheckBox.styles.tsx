import styled from "styled-components";
import CheckSVG from "../../svgs/check.svg";

const CheckBox = styled.div`
  display: flex;
  text-align: center;
`;

const Input = styled.input`
  appearance: none;
  position: relative;
  width: 28px;
  height: 28px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  cursor: pointer;

  & :checked {
    background-color: #0fb6cc;
    background-image: url(${CheckSVG});
    background-repeat: no-repeat;
  }
`;

const Label = styled.label`
  position: relative;
  top: 6px;
  margin-left: 8px;
  color: black;
`;

export default { CheckBox, Input, Label };
