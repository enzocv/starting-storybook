import React from 'react';
import ButtonIcon from '../../molecules/ButtonIcon';

export default {
	title: 'Modelecules/ButtonsIcon',
	componet: ButtonIcon,
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
	label: 'Button Icon',
	icon: 'right-arrow',
};
