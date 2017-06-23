import numeral from 'numeral';
import { pathOr } from 'ramda';

export const getResultsFromResponse = pathOr([], ['data', 'result']);

export const getResultFromResponse = pathOr({}, ['data', 'result']);

export const formatVND = (price) => numeral(price*1000).format('0,0') + ' vnd';