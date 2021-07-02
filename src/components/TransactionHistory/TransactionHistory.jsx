import React from 'react';
import PropTypes from "prop-types";
import {
    TransactionTable, TransactionThead,
    TransactionTr, TransactionTh, TransactionTbody, TransactionTd
} from "./TransactionHistory.styles"

function TransactionHistory({ transactions }) {
    return (
        <TransactionTable>
            <TransactionThead>
                <TransactionTr>
                    <TransactionTh>Type</TransactionTh>
                    <TransactionTh>Amount</TransactionTh>
                    <TransactionTh>Currency</TransactionTh>
                </TransactionTr>
            </TransactionThead>
            <TransactionTbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <TransactionTr key={id}>
                        <TransactionTd>{type}</TransactionTd>
                        <TransactionTd>{amount}</TransactionTd>
                        <TransactionTd>{currency}</TransactionTd>
                    </TransactionTr>
                ))}
            </TransactionTbody>
        </TransactionTable>
    )
}
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amout: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};
export default TransactionHistory
