import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import ContentWrapper from 'components/ContentWrapper';
import { getCategory, updateCategory } from './actions';

import DetailForm from '../DetailForm';


@inject('categoryDetailStore')
@observer
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
		const { categoryDetailStore } = this.props;
		return (
			<ContentWrapper>
				<section className="content">
					<DetailForm 
						details={categoryDetailStore}
					/>
				</section>
			</ContentWrapper>
		)
	}
}

export default CategoryDetail;