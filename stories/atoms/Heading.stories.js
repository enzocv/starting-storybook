import React from 'react';
import Heading from '../../atoms/Heading';

export default {
	title: 'Atoms/Heading',
	component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Heading',
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Heading',
	color: 'primary',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
	label: 'Heading',
	size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
	label: 'Heading',
	size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
	label: 'Heading',
	size: 'md',
};
