import Transactions from '../components/Transactions'
import NavBar from "./components/NavBar";

function Home() {
  return (
		<div className='Index'>
			<NavBar />
			<h2>Home</h2>
			<Transactions />
		</div>
	);
}

export default Home