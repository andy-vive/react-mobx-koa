import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { SlideLeftTransition } from 'components/RouteTransition';
import { mode } from 'components/FormMobx';

import { getCategory, updateCategory } from '../DetailForm/actions';
import DetailForm from '../DetailForm';


class CategoryDetail extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { code } = this.props.params;
		if (code) {
			getCategory(code);
		}
	}

	render() {
		const { code } = this.props.params;
		return (
			<SlideLeftTransition
				pathname="CategoryDetail"
			>
				<section className="content">
					<DetailForm 
						mode={mode.EDIT}
						onSubmit={(data) => updateCategory({...data, code})}
					/>
				</section>
			</SlideLeftTransition>
		)
	}
}

export default CategoryDetail;