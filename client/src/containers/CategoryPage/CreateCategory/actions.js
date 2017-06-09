import axios from 'axios';
import _ from 'lodash';
import { apiRest as categoryRest } from '../apiRest';

export const addNewCategory = (category) => {
	if(_.isEmpty(category)) {
		// TODO: Show toast error
		return;
	}
	axios.post(`${categoryRest.root}`, {
		category,
	})
	.then((res) => {
		console.info();
	})
	.catch((err) => {
		throw err;
	});
};