import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Heading.css';

const Heading = ({ label, color, size }) => {
	return (
		<heading
			className={classnames('heading', {
				[`color-${color}`]: color,
				[`size-${size}`]: size,
			})}
		>
			{label}
		</heading>
	);
};

Heading.propTypes = {
	label: PropTypes.node.isRequired,
	color: PropTypes.oneOf['primary'],
	size: PropTypes.oneOf[('xs', 'sm', 'md')],
};

Heading.defaultProps = {
	color: 'default',
	size: 'md',
};

export default Heading;
