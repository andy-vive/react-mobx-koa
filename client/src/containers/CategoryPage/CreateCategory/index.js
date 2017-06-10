import React, { Component } from 'react';
import { FadeTransition } from 'components/RouteTransition';
import { mode } from 'components/FormMobx';
import { addNewCategory } from './actions';
import DetailForm from '../DetailForm';


class CreateCategory extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<FadeTransition
				pathname="CreateCategory"
			>
				<section className="content">
					<DetailForm
						mode={mode.CREATE}
						onSubmit={addNewCategory}
					/>
				</section>
			</FadeTransition>
		);
	}
};

export default CreateCategory;
