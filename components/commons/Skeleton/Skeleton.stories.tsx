import Skeleton, { Props } from "./Skeleton";

export default {
  title: "components/Skeleton",
  component: Skeleton,
  argTypes: {},
};

const Template = (args: any) => <Skeleton {...args} />;

export const Default = Template.bind({});

export const CARD = () => <Skeleton type="CARD" size="MEDIUM" />;

(Default as any).args = {
  type: "CIRCLE",
  size: "SMALL",
};
