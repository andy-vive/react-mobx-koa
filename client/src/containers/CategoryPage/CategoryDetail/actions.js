import axios from 'axios';
import _ from 'lodash';
import  formStore from '../DetailForm/formStore';
import { apiRest as categoryRest } from '../apiRest';

export const getCategory = (categoryCode) => {
	if (!categoryCode) {
		console.error('Empty category code');
		return;
	}
	axios.get(`${categoryRest.root}/${categoryCode}`)
		.then((res) => {
			const { result } = res.data;
			if (result) {
				formStore.set('value',{
					...result
				});
			}
		})
		.catch((err) => {
			throw err;
		});
};

export const updateCategory = (category) => {
	if(_.isEmpty(category)) {
		// TODO: Show toast error
		return;
	}
	axios.put(`${categoryRest.root}/${category.code}`, {
		category,
	})
	.then((res) => {
		const { result } = res.data;
		if (result) {
			formStore.set('value',{
				...result
			});
		}
	})
	.catch((err) => {
		throw err;
	});
};