import css from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';


const TransactionHistory = ({ transactions }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(transaction => (
                        <TransactionHistoryItem key={transaction.id} item={transaction} />
                    ))
                }

            </tbody>
        </table>
    )
}

export default TransactionHistory