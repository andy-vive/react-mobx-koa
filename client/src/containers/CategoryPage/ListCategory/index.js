import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { FadeTransition } from 'components/RouteTransition';
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
			<FadeTransition
				pathname="ListCategory"
			>
				<section className="content-header">
					<h1>Category Page</h1>
				</section>
		    <section className="content">
		    	<div className="">
		    		<div className="btn-group">
		    			<Link 
		    				to="/categories/new"
	    					className="btn btn-success"
	    				>
	    					Create New Category
    					</Link>
		    		</div>
		    	</div>
					<div className="">
						{ categoryComps }	
					</div>
    		</section>
    		
			</FadeTransition>
		)
	}
}
export default ListCategory;