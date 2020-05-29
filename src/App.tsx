import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import Navigation from './components/Nav';
import CompanyList from './containers/CompanyList/index';
import SingleCompany from './containers/SingleCompany/index';

const history = createBrowserHistory();
function App() {
	return (
		<Router history={history}>
		<div className="App">
			<Navigation />
			<Switch>
				<Route exact component={CompanyList} path="/companies" />
				<Route exact component={CompanyList} path="/" />
				<Route exact component={SingleCompany} path="/companies/:id" />
			</Switch>
			</div>
		</Router>

	);
}

export default App;