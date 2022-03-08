import Button, { Props } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {},
};

const Template = (args: Props) => <Button {...args} />;

export const Default = Template.bind({});

(Default as any).args = {
  fontColor: "white",
  backgroundColor: "purple",
  size: "MD",
  children: "Button",
};
