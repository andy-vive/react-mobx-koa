import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { FadeTransition } from 'components/RouteTransition';
import PageHeader from 'components/PageHeader';
import { getAllCategories } from './actions';
import CategoryItems from './CategoryItems';
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
		return (
			<FadeTransition
				pathname="ListCategory"
			>
				<PageHeader
					title="List Category"
				/>
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
					<div>
						<CategoryItems 
							categories={categories}
						/>
					</div>
    		</section>
    		
			</FadeTransition>
		)
	}
}
export default ListCategory;