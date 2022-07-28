import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './card';

export default {
  componentTitle: Card,
  title: 'Mycard',
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Soy kfhdakhfka',
};

export const ConfigAdvance = Template.bind({});
Basic.args = {
  title: 'Soy config Advance',
};
