import React from 'react';
import { Link } from 'react-router';
import { pipe } from 'ramda';
import moment from 'moment';
import Card, { CardHeader, CardBody } from 'components/Card';
import { formGroup } from 'components/FormGroup';

const basePrice = (product) => <p>{product.basePrice}</p>
const quantity = (product) => <p>{product.quantity + '' + product.unit}</p>
const importDate = (product) => <p>{ moment(product.createAt).format("DD/MM/YYYY")}</p>
const content = (product) => [
	pipe(basePrice, formGroup("Base Price", `basePrice-${product.code}`))(product),
	pipe(quantity, formGroup("Quantity", `quantity-${product.code}`))(product),
	pipe(importDate, formGroup("Im[prt Date", `importDate-${product.code}`))(product),
];
const body = (product) => <CardBody>{ content(product) }</CardBody>


const cardHeader = (children) => <CardHeader>{children}</CardHeader>
const link = (title, href) => <Link to={href}>{title}</Link>
const header = pipe(link, cardHeader);

export const ProductItem = ({ product }) => (
	<Card>
		{
			header(product.code, `/products/${product.code}/detail`)
		}
		{
			body(product)
		}
	</Card>
);