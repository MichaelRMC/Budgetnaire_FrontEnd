import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Four0Four from "./Pages/Four0Four";

import NavBar from "./components/NavBar";

import "./App.css";

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path='/transactions' element={<Home />} />
						<Route path='/transactions/new' element={<New />} />
						<Route path='/transactions/:index/edit' element={<Edit />} />
						<Route path='/transactions/:index' element={<Show />} />
						<Route path='*' element={<Four0Four />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
