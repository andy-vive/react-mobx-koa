import koaRouter from 'koa-router';
import { 
	getProductsByCategory,
	addProduct,
} from 'controllers/productController';

const router = koaRouter({
	prefix: '/api/products',
});

router.get('/', getProductsByCategory);

router.post('/', addProduct);

module.exports = router; 
