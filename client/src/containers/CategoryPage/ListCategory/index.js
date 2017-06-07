import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ContentWrapper from 'components/ContentWrapper';

import { getAllCategories } from './actions';
import CategoryItem from './CategoryItem';
@inject('categoryStore')
@observer
class ListCategory extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		getAllCategories();
	}

	render() {
		const { categories } = this.props.categoryStore;
		const categoryComps = categories.map((o) => (
			<CategoryItem 
				key={o.id}
				category={{...o}}
			/>
			));
		return (
			<ContentWrapper>
		    <section className="content">
					{ categoryComps }	
    		</section>
    		
			</ContentWrapper>
		)
	}
}
export default ListCategory;