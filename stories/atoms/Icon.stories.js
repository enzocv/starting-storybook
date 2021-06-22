import React from 'react';
import Icon from '../../atoms/Icon';

export default {
	title: 'Atoms/Icon',
	component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Arrow = Template.bind({});
Arrow.args = {
	type: 'right-arrow',
};
