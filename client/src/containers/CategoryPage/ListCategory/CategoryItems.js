import React from 'react';
import { observer } from 'mobx-react';
import { compose, pipe } from 'ramda';
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
						<CategoryItemComp
							key={category.code}
							category={category}
						/>
					))
				}
			</div>
		);
	}
}

const formGroup = (title, key) => (children) => <FormGroup key={key} title={title}>{children}</FormGroup>;

const name = (category) => <p>{category.name}</p>;

const priceTypeI = (category) => <p>{category.priceTypeI}</p>;

const priceTypeII = (category) => <p>{category.priceTypeII}</p>;

const description = (category) => <p>{category.description}</p>;

const totalProduct = (category) => <p>{category.totalProduct}</p>;

const empty = () => null;

const emptyNumber = () => 0;

const categoryItem = (category) => [
	compose(formGroup("Category Name", "name" + category.code), category.name ? name : empty)(category),
	compose(formGroup("Description", "des" + category.code), category.description ? description : empty)(category),
	compose(formGroup("Price Type I", "priceI" + category.code), category.priceTypeI ? priceTypeI : emptyNumber)(category),
	compose(formGroup("Price Type II", "priceII" + category.code), category.priceTypeII ? priceTypeII : emptyNumber)(category),
	pipe(
		category.totalProduct ? totalProduct : emptyNumber,
		formGroup("Total Producct", "totalProduct" + category.code),
	)(category),
];


const CategoryItemComp = ({ category }) => (
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
				<Link 
					to={`/categories/${category.code}/products`}
					className="btn btn-warning"
				>
					Product List
				</Link>
			</div>
		</CardHeader>
		<CardBody>
			{ categoryItem(category) }
		</CardBody>
  </Card>
);
