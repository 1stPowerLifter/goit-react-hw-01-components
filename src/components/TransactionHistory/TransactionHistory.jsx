import {Table, Head, Body} from "./TransactionHistory.styled"
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Head>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </Head>

            <Body>
                {items.map(item => <Transaction
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />)}
                
            </Body>
        </Table>
    )
}

const Transaction = ({type, amount, currency}) => {
    return (
        <tr >
            <td>{upFirstLetter(type)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

function upFirstLetter(type) {
    const upFirst = type.slice(0, 1).toUpperCase()
    const other = type.slice(1, type.length)
    return upFirst + other
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}