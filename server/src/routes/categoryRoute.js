import koaRouter from 'koa-router';
import { 
	getAllCategories,
	getCategory,
	addNewCategory,
	editCategory,
} from 'controllers/categoryController';

const router = koaRouter({
	prefix: '/api/categories',
});

router.get('/', getAllCategories);

router.get('/:code', getCategory);

router.post('/', addNewCategory);

router.put('/:code', editCategory);

module.exports = router; 
