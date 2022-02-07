import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

// import PrivateRoute from './pages/PrivateRoute';
// import AuthWrapper from './pages/AuthWrapper';

import {
	About,
	Cart,
	Checkout,
	Error,
	Home,
	Products,
	SingleProduct,
	Private,
	AuthWrapper,
} from './pages';

function App() {
	return (
		<AuthWrapper>
			<Router>
				<h4
					style={{ background: 'black', color: 'yellow', lineHeight: '4rem', textAlign: 'center' }}
				>
					comfy sloth starter
				</h4>
				<Navbar />
				<Sidebar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/products">
						<Products />
					</Route>
					<Route exact path="/products/:id" children={<SingleProduct />} />
					<Private exact path="/checkout">
						<Checkout />
					</Private>
					<Route path="/*">
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</AuthWrapper>
	);
}

export default App;
