import koa from 'koa';
import router from './routes';

const app = new koa();
const port = 4000;

app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});