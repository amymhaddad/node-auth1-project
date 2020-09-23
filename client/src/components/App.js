import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import React from 'react';
import Login from './Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './Welcome';
import DisplayUsers from './Users';
import NotFoundPage from './NotFoundPage';

function App() {
	return (
		<div>
			<ToastContainer autoClose={2000} hideProgressBar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<Route path="/welcome" exact component={Welcome} />
				<Route path="/users" exact component={DisplayUsers} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	);
}

export default App;
