import Transactions from '../components/Transactions'
import Header from "../components/Header";

function Home() {
  return (
		<div className='Index'>
			<Header />
			<h2>Home</h2>
			<Transactions />
		</div>
	);
}

export default Home