import { Link } from "react-router-dom";

function Transaction({transaction, index}) {
  return (
	 <tr>
    <td>
      {transaction.date}
    </td>
    <td>
      <Link to={`/transactions/${index}`}>{transaction.name}</Link>
    </td>
    <td>{transaction.category}</td>
   </tr>
  )
}

export default Transaction