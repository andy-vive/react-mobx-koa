import React from 'react';
import classNames from 'classnames';
import './styles.less';

const HamburgerIcon = (props) => (
	<div
		id={props.id}
		onClick={props.onClick}
		className={classNames(
			'nav-icon',
			{
				open: props.open,
				back: props.back,
			}
		)}
	>
		<div className="nav-icon-bars">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
);

export default HamburgerIcon;