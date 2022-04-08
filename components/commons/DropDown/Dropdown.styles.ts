import styled, { css } from "styled-components";

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const trigger = css`
  background-color: rgba(0, 0, 0, 0.8);
  filter: ${`drop-shadow(0 0 2px black)`};
`;

const ToggleButton = styled.button<{ isTrigger: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: grey;
  border: none;

  ${({ isTrigger }) => isTrigger && trigger}
`;
const Dot = styled.div`
  width: 4.5px;
  height: 4.5px;
  border-radius: 50%;
  background-color: black;
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.div<{ isTrigger: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 54px;
  border: 1px solid gray;
  border-radius: 4px;
`;

export default { Root, ToggleButton, DotsWrapper, Dot, Menu };
