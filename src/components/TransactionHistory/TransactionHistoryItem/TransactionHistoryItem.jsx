import clsx from "clsx";
import css from './TransactionHistoryItem.module.css'

const TransactionHistoryItem = ({ item }) => {

  return (
    <>
      <tr className={clsx(css.bodyTr)}>
        <td className={clsx(css.bodyTd, css.bodyTdType)}>{item.type}</td>
        <td className={clsx(css.bodyTd)}>{item.amount}</td>
        <td className={clsx(css.bodyTd)}>{item.currency}</td>
      </tr>
    </>
  )
}

export default TransactionHistoryItem