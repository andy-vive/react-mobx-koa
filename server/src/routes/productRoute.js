import koaRouter from 'koa-router';
import { 
	getProductsByCategory,
	createProduct,
} from '../controllers/productController';

const router = koaRouter({
	prefix: '/api/products',
});

router.get('/', getProductsByCategory);
router.post('/', createProduct);

module.exports = router; 