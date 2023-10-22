import TransactionDetails from '../components/TransactionDetails'
import NavBar from "./components/NavBar";

function Show() {
  return (
		<div className='Show'>
			<NavBar />
			<h2>Show</h2>
			<TransactionDetails />
		</div>
	);
}

export default Show