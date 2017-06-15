import { enumerable } from 'utils';

@enumerable
export class ProductUnit {
	static pack = {
		code: 0,
		str: 'Pack',
	};
	static tube = {
		code: 1,
		str: 'Tube',
	};
}