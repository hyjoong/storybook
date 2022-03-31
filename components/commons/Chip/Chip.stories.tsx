import React from "react";
import Chip, { Props } from "./Chip";

export default {
  title: "components/Chip",
  component: Chip,
  argTypes: {},
};

export const Progress = (args: Props) => <Chip.Dashed {...args} />;

export const Complete = (args: Props) => <Chip.Solid {...args} />;

(Progress as any).args = {
  children: "칩 텍스트",
};
(Complete as any).args = {
  children: "칩 텍스트",
};
