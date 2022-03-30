import CheckBox, { Props } from "./CheckBox";

export default {
  title: "components/CheckBox",
  component: CheckBox,
  argTypes: {},
};

const Template = (args: Props) => <CheckBox {...args} />;

export const Default = Template.bind({});

(Default as any).args = {
  labelText: "라벨 텍스트",
};
