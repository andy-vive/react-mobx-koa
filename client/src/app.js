import React from "react";
import { render } from "react-dom";
import { Router, hashHistory } from 'react-router';
import { Provider } from "mobx-react";
import { AppContainer } from "react-hot-loader";

import 'ionicons/css/ionicons.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from 'containers/App';

import createRoutes from './routes';
import stores from './stores';

const renderApp = () => {
	  // Set up the router, wrapping all Routes in the App component
  const rootRoute = {
    component: App,
    childRoutes: createRoutes(),
  };

	render(
		<AppContainer>
			<Provider {...stores}>
	      <Router history={hashHistory} routes={rootRoute} />
			</Provider>
		</AppContainer>,
		document.getElementById("root")
	);
};

renderApp();

if (module.hot) {
	module.hot.accept(() => renderApp(App));
}