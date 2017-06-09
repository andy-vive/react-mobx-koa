import axios from 'axios';
import _ from 'lodash';
import  formStore from '../DetailForm/formStore';
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
		if (res.data) {
			formStore.reset();
			alert('Create success');			
		}
	})
	.catch((err) => {
		throw err;
	});
}
	