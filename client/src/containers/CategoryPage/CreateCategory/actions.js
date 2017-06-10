import axios from 'axios';
import _ from 'lodash';
import { ToastSuccess, ToastDanger } from 'react-toastr-basic';
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
			ToastSuccess('Create new category successfully');
		}
	})
	.catch((err) => {
		ToastDanger('Error occurs when creating....');
		throw err;
	});
};

export const resetForm = () => {
	formStore.reset();
}
