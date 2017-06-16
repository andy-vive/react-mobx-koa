import React from 'react';
import { observer } from 'mobx-react';
import { map } from 'ramda';
import { ProductItem } from './ProductItem';

const content = map((product) => <ProductItem key={product.code} product={product} />)

export default observer(({ products }) => 
	<div>
		{content(products)}
	</div>
);