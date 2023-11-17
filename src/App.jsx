import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
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
						<Route path="/" element={ <Home /> } />
						<Route path="/transactions" element={<Index />} />
						<Route path="/transactions/new" element={<New />} />
						<Route path="/transactions/:id/edit" element={<Edit />} />
						<Route path="/transactions/:id" element={<Show />} />
						<Route path='*' element={<Four0Four />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
