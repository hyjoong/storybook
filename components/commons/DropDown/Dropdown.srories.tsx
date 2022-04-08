import React from "react";
import Dropdown, { Props } from "./Dropdown";

export default {
  title: "components/Dropdown",
  component: Dropdown,
  argTypes: {},
};

const Template = (args: Props) => <Dropdown {...args} />;

export const Default = Template.bind({});

const Buttons = (
  <>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
  </>
);
(Default as any).args = {
  children: Buttons,
};
