import React from 'react';

import Button from '../../atoms/Button';

export default {
	title: 'Atoms/Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Button Default',
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Button Primary',
	type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button secondary',
	type: 'secondary',
};
