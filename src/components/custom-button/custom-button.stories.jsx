
import React from 'react';

import CustomButton from './custom-button.component';

export default {
  component: CustomButton,
  title: 'Custom Button',
};

const Template = args => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Button',
    type: 'button'
};

export const Primary = Template.bind({});

Primary.args = {
    label: 'Primary',
    type: 'button'
};


