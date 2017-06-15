import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';
const PageHeader = ({ title, children }) => (
	<div className="page-header">
		<section className="content-header">
			<h1>{title}</h1>
		</section>
		{ children }
	</div>
);

export default PageHeader;

PageHeader.defaultProps = {
	title: 'Page Header',
	children: undefined,
};

PageHeader.propTypes = {
	title: PropTypes.string,
	children: PropTypes.any,
};
