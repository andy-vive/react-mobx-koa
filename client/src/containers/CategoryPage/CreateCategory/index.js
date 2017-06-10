import React, { Component } from 'react';
import { SlideLeftTransition } from 'components/RouteTransition';
import { mode } from 'components/FormMobx';
import { addNewCategory } from './actions';
import DetailForm from '../DetailForm';


class CreateCategory extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<SlideLeftTransition
				pathname="CreateCategory"
			>
				<section className="content">
					<DetailForm
						mode={mode.CREATE}
						onSubmit={addNewCategory}
					/>
				</section>
			</SlideLeftTransition>
		);
	}
};

export default CreateCategory;
