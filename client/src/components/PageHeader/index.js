import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title }) => (
	<section className="content-header">
		<h1>{title}</h1>
	</section>
);

export default PageHeader;

PageHeader.defaultProps = {
	title: 'Page Header',
};

PageHeader.propTypes = {
	title: PropTypes.string,
};