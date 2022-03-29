import styled, { css } from "styled-components";

const Label = styled.label``;

const Text = styled.span<{ fontSize: string }>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  line-height: 1rem;
  user-select: none;
`;

const ToggleMark = styled.span`
  position: relative;
  width: 2.5rem;
  min-width: 2.5rem;
  height: 1.5rem;
  border-radius: 25px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    transition: transform 0.2s ease, backgroud-color 0.5s ease;
  }
`;

const switchOn = css`
  background-color: black;
  border: none;

  &::after {
    background-color: white;
    transform: translateX(1.25rem);
  }
`;

const switchOff = css`
  background-color: white;

  &::after {
    background-color: black;
    transform: translateX(3px);
  }
`;

const Input = styled.input`
  display: none;

  & ~ ${ToggleMark} {
    ${switchOff}
  }

  &:checked {
    & ~ ${ToggleMark} {
      ${switchOn}
    }
  }
`;

export default { Label, Text, Input, ToggleMark };
