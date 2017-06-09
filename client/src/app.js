import React from "react";
import { render } from "react-dom";
import { Router, hashHistory } from 'react-router';
import { Provider } from "mobx-react";
import { AppContainer } from "react-hot-loader";

import 'ionicons/css/ionicons.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from 'containers/App';
import categoryStore from 'containers/CategoryPage/ListCategory/categoryStore';
import categoryDetailStore from 'containers/CategoryPage/CategoryDetail/categoryDetailStore';
import categoryForm from 'containers/CategoryPage/DetailForm/formStore';



import createRoutes from './routes';

const store = {
	categoryStore,
	categoryDetailStore,
	categoryForm,
};

const renderApp = Component => {
	  // Set up the router, wrapping all Routes in the App component
  const rootRoute = {
    component: App,
    childRoutes: createRoutes(),
  };

	render(
		<AppContainer>
			<Provider {...store}>
	      <Router history={hashHistory} routes={rootRoute} />
			</Provider>
		</AppContainer>,
		document.getElementById("root")
	);
};

renderApp(<div>aaaa</div>);

if (module.hot) {
	module.hot.accept(() => renderApp(App));
}