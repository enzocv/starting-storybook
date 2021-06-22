import React from 'react';
import { mapIcon, mapSize, iconList } from './helpers';
import './Icon.css';
import classNames from 'classnames';

const Icon = ({ type }) => {
	return (
		<div className={classNames('container-icon')}>
			{iconList[type]()}
			{/* <img src={mapIcon(type)} className={classNames('icon-height')} /> */}
		</div>
	);
};

export default Icon;
