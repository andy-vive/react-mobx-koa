import React from 'react';
import { Link } from 'react-router';
import Card, { CardHeader, CardBody } from 'components/Card';
import FormGroup from 'components/FormGroup';

export default ({ category, onClick }) => (
	<Card>
		<CardHeader>
			<Link to={`/categories/${category.code}`}>
				<h4>{category.code}</h4>
			</Link>
		</CardHeader>
		<CardBody>
			<FormGroup
				title="Category Name"
			>
				<p>
					{category.name}
				</p>
			</FormGroup>
			<FormGroup
				title="Price type I"
			>
				<p>
					{category.priceTypeI || 0}
				</p>
			</FormGroup>
			<FormGroup
				title="Price type II"
			>
				<p>
					{category.priceTypeII || 0}
				</p>
			</FormGroup>
			<FormGroup
				title="Description"
			>
				<p>
					{category.description}
				</p>
			</FormGroup>
		</CardBody>
  </Card>
);