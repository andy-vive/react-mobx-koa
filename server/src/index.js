import koa from 'koa';
import convert from 'koa-convert';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import methodOverride from 'koa-methodoverride';

import router from './routes';

const app = new koa();
const port = 4000;

app.use(bodyParser());
app.use(convert(json()));
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});