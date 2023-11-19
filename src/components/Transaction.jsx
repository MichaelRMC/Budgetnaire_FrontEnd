import { Link } from "react-router-dom";

function Transaction({transaction, index}) {
  return (
	 <tr>
    <td>
      {transaction.date}
    </td>
    <td>
     <Link to={`/transactions/${index}`}>{transaction.item_name}</Link> 
    </td>
    <td>{transaction.business}</td>
    
   </tr>
  )
}

export default Transaction