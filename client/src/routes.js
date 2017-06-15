/**
 * Dynamic inject route and reducer
 * @see http://mxstbr.blog/2016/01/react-apps-with-pages/
 */

import { ROUTES } from 'utils/routes';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
      path: '/',
      name: ROUTES.DASHBOARD,
      getComponents(nextState, cb) {
				import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/categories',
      name: ROUTES.LIST_CATEGORY,
      getComponents(nextState, cb) {
        import('containers/CategoryPage/ListCategory')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/categories/new',
      name: ROUTES.CREATE_CATEGORY,
      getComponents(nextState, cb) {
        import('containers/CategoryPage/CreateCategory')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/categories/:code',
      name: ROUTES.VIEW_CATEGORY,
      getComponents(nextState, cb) {
        import('containers/CategoryPage/CategoryDetail')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/categories/:code/new-products',
      name: ROUTES.CREATE_PRODUCT,
      getComponents(nextState, cb) {
        import('containers/ProductPage/CreateProduct')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/products/news',
      name: ROUTES.CREATE_PRODUCT,
      getComponents(nextState, cb) {
        import('containers/ProductPage/CreateProduct')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/categories/:code/products',
      name: ROUTES.LIST_PRODUCT,
      getComponents(nextState, cb) {
        import('containers/ProductPage/ListProduct')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/products',
      name: ROUTES.LIST_PRODUCT,
      getComponents(nextState, cb) {
        import('containers/ProductPage/ListProduct')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      name: ROUTES.NOT_FOUND,
      getComponents(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    
  ];
}