import React, { Component } from 'react';
import ContentWrapper from 'components/ContentWrapper';
import { mode } from 'components/FormMobx';
import { addNewCategory } from './actions';
import DetailForm from '../DetailForm';


class CreateCategory extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ContentWrapper>
				<section className="content">
					<DetailForm
						mode={mode.CREATE}
						onSubmit={addNewCategory}
					/>
				</section>
			</ContentWrapper>
		)
	}
}

export default CreateCategory;