import {
  TransactionType,
  TransactionAmount,
  TransactionCurrency,
} from './Transaction';
import {
  TableContainer,
  TableTitles,
  Table,
  Title,
  TableWrapper,
  TH,
} from './Transaction.styled';

export const TransactionList = ({ transactions }) => {
  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <TableTitles>
            <Title>
              <TH>Type</TH>
            </Title>
          </TableTitles>
          {transactions.map(transactions => (
            <TransactionType
              key={transactions.id}
              transactions={transactions}
            />
          ))}
        </Table>

        <Table>
          <TableTitles>
            <Title>
              <TH>Amount</TH>
            </Title>
          </TableTitles>
          {transactions.map(transactions => (
            <TransactionAmount
              key={transactions.id}
              transactions={transactions}
            />
          ))}
        </Table>

        <Table>
          <TableTitles>
            <Title>
              <TH>Currency</TH>
            </Title>
          </TableTitles>
          {transactions.map(transactions => (
            <TransactionCurrency
              key={transactions.id}
              transactions={transactions}
            />
          ))}
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};
