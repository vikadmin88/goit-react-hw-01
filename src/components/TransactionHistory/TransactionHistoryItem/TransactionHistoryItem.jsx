import css from './TransactionHistoryItem.module.css'

const TransactionHistoryItem = ({ item }) => {
  // console.log(item.id);
  return (
    <>
      <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </>
  )
}

export default TransactionHistoryItem