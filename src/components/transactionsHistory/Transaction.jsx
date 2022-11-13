import PropTypes from 'prop-types';
import { DataInfo } from './Transaction.styled';


export const TransactionType = ({ transactions: { type } }) => {
  return (
    <DataInfo>
      <tr>
        <td>{type}</td>
      </tr>
    </DataInfo>
  );
};


TransactionType.propTypes = {
  transactions: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
};


export const TransactionAmount = ({ transactions: { amount } }) => {
  return (
    <DataInfo>
      <tr>
        <td>{amount}</td>
      </tr>
    </DataInfo>
  );
};

TransactionAmount.propTypes = {
  transactions: PropTypes.shape({
    amount: PropTypes.string.isRequired,
  }),
};

export const TransactionCurrency = ({ transactions: { currency } }) => {
  return (
    <DataInfo>
      <tr>
        <td>{currency}</td>
      </tr>
    </DataInfo>
  );
};

TransactionCurrency.propTypes = {
  transactions: PropTypes.shape({
    currency: PropTypes.string.isRequired,
  }),
};

// {/* <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table> */}
