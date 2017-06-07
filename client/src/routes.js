/**
 * Dynamic inject route and reducer
 * @see http://mxstbr.blog/2016/01/react-apps-with-pages/
 */

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
      name: 'dashboard',
      getComponents(nextState, cb) {
				import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notFound',
      getComponents(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },

  ];
}