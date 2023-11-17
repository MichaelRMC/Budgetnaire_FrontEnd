import { Link } from "react-router-dom";

function Transaction({transaction, index}) {
  return (
	 <tr>
    <td>
      {transaction.date}
    </td>
    <td>
      {transaction.item_name}
    </td>
    <td>{transaction.business}</td>
    <td><Link to={`/transactions/${index}`}>💸</Link></td>
   </tr>
  )
}

export default Transaction