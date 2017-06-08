import koaRouter from 'koa-router';
import { getAllCategories } from '../controllers/categoryController';
console.log(getAllCategories)
const router = koaRouter({
	prefix: '/api/categories',
});

router.get('/', getAllCategories);

module.exports = router;