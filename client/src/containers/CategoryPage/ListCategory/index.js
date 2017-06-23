import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { FadeTransition } from 'components/RouteTransition';
import PageHeader from 'components/PageHeader';
import CategoryItems from './CategoryItems';

import { getCategories } from './actions';

@inject('categoryStore')
@observer
class ListCategory extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		getCategories();
	}

	render() {
		const { categories } = this.props.categoryStore;
		return (
			<FadeTransition
				pathname="ListCategory"
			>
				<PageHeader
					title="Category List"
				>
					<div className="btn-group">
	    			<Link 
	    				to="/categories/new"
    					className="btn btn-success"
    				>
    					Create New Category
  					</Link>
	    		</div>
				</PageHeader>
		    <section className="content">
					<CategoryItems 
						categories={categories}
					/>
    		</section>
			</FadeTransition>
		);
	}
}
export default ListCategory;
