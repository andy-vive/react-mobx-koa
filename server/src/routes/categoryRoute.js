import koaRouter from 'koa-router';
import { 
	getAllCategories,
	findCategoryByCode,
	addNewCategory,
	editCategory,
} from '../controllers/categoryController';

const router = koaRouter({
	prefix: '/api/categories',
});

router.get('/', getAllCategories);

router.get('/:code', findCategoryByCode);

router.post('/', addNewCategory);

router.put('/:code', editCategory);

module.exports = router;