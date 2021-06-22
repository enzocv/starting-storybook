import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Button.css';

const Button = ({ label, type, children }) => {
	return (
		<button
			className={classnames('button', {
				[`type-${type}`]: type,
			})}
		>
			{label}
			{children}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.node.isRequired,
	type: PropTypes.oneOf[('primary', 'secondary', 'tertiary')],
	children: PropTypes.node.isRequired
};

Button.defaultProps = {
	type: 'primary',
}

export default Button;
