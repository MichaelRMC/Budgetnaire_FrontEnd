import TransactionEditForm from '../components/TransactionEditForm'
import NavBar from "./components/NavBar";

function Edit() {
  return (
	<div className="Edit Transaction">
		<NavBar />
		<h2>Edit Transaction</h2>
		<TransactionEditForm />
	</div>
  )
}

export default Edit