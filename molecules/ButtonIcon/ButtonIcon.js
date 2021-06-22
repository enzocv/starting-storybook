import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

const ButtonIcon = ({ label, type, icon }) => {

	return (
		<>
			<Button type={type} label={label}>
				<Icon type={icon} />
			</Button>
		</>
	);
};

ButtonIcon.propTypes = {
	/**
	 * Name of Button
	 */
	label: PropTypes.node.isRequired,
	/**
	 * Name of Icon
	 */
	icon: PropTypes.string.isRequired,
	/**
	 * Type of Button (primary, secondary, tertiary). By default secondary
	 */
	type: PropTypes.oneOf[('primary', 'secondary', 'tertiary')],
};

ButtonIcon.defaultProps = {
	type: 'secondary',
};

export default ButtonIcon;
