import axios from 'axios';
import  categoryDetailStore from './categoryDetailStore';
import { apiRest as categoryRest } from '../apiRest';

export const getCategory = (categoryCode) => {
	if (!categoryCode) {
		console.error('Empty category code');
		return;
	}
	categoryDetailStore.setIsLoading(true);
	axios.get(`${categoryRest.root}/${categoryCode}`)
		.then((res) => {
			const { result } = res.data;
			categoryDetailStore.setIsLoading(false);
			if (result) {
				categoryDetailStore.setCode(result.code);
				categoryDetailStore.setName(result.name);
				categoryDetailStore.setDescription(result.description);
				categoryDetailStore.setPriceTypeI(result.priceTypeI);
				categoryDetailStore.setPriceTypeII(result.priceTypeII);

			}
		})
		.catch((err) => {
			categoryDetailStore.setIsLoading(false);
			throw err;
		});
};

export const updateCategory = (category) => {

};