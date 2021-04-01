import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.css';

const Button = ({ label, type }) => {
	return (
		<button
			className={classnames('button', {
				[`type-${type}`]: type,
			})}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.node.isRequired,
	type: PropTypes.oneOf[('primary', 'secondary')],
};

export default Button;
