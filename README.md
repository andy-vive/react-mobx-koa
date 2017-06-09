## Introduction

This project is an example of using react-mobx in client side and koa js in server side with database postgres.
It's also a e-commerce project. Build a system to manage your products, orders, and customers.

## Technical

- **Client** [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate), I refer to use to use this stack instead of setting up everythings from strach. This stack using React-Redux, but you can use it and custom something to make your project with React and Mobx.

- **Server** [js-stack-from-scratch](https://github.com/verekia/js-stack-from-scratch). It's used to build a project from backend to frontend, integrate with a lot of tools such as (flow, babel, eslint). But I dont have enough time so I customed and remove somethings out of this project.

- **Testing** In future, I will choose Jest.

- **Deployment** TravisCI and Heroku? Not bad!

## Quick start

** Install dependencies **
1. Install root project dependencies.
```js
npm install or yarn install
````

2. Install children projects dependencies.
```js
npm start install
```

3. Run migrate script to auto create tables. I'm using Postgres, database name: 'miori'
```js
npm start migrate
```
** Run project in dev mode **
```js
npm start dev
```

## Doing
- Re-design UI for this project, apply service workers. I always think, a PWA is better than a mobile app.

## Todo:
1. Setup server to build and deploy. Apply testing, CICD process.
2. Implement core feature:
- A dashboard where users can view overrall their business. Using chart...
- Manage categorys, products, and orders.
- Report system.

## FAQ

**What is `nps`?**

Arcording to the [nps](https://github.com/kentcdodds/nps) documentation:
> All the benefits of npm scripts without the cost of a bloated package.json and limits of json

I use `nps` to write few scripts (build, dev, ...), it reduces a big amount of code inside `package.json` file. `nps`'s scripts are written `package-scripts.js` file.

## Contributors

[steThera](https://www.facebook.com/duy.han.944)

## License

This project is licensed under the MIT license, Copyright (c) 2017 steThera. 
For more information see `LICENSE`.