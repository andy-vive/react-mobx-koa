import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
import Card, { CardHeader, CardBody } from 'components/Card';
import FormGroup from 'components/FormGroup';

/*
* This component is only showed general information. It's diffrent with DetailItem in DetailForm component
*/

@observer
export default class extends React.Component {
	render() {
		const { categories =[] } = this.props;
		return (
			<div>
				{ categories.map((category) => (
						<CategoryItem
							key={category.code}
							category={category}
						/>
					))
				}
			</div>
		);
	}
}

const CategoryItem = ({ category }) => (
	<Card>
		<CardHeader>
			<Link to={`/categories/${category.code}`}
				style={{ float: 'left' }}
			>
				<h4>{category.code}</h4>
			</Link>
			<div className="btn-group pull-right">
				<Link 
					to={`/categories/${category.code}/new-products`}
					className="btn btn-success"
				>
					Add more products
				</Link>
			</div>
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