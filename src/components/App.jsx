import user from './userProfile/user';
import { User } from './userProfile/UserProfile';
import data from './statisticList/data';
import { StatisticsList } from './statisticList/StatisticsList';
import friends from "./friendsList/friends"
import { FriendsList } from './friendsList/FriendsList';
import transactions from "./transactionsHistory/transactions"
import { TransactionList } from './transactionsHistory/TransactionsList';
import { MainContainer } from './Base.styled';


export const App = () => {
  return (
    <MainContainer>    
 
        <User user={user} />   

        <StatisticsList title="Upload stats" stats={data} />
        <StatisticsList stats={data} />
    
        <FriendsList friends={friends}/>
      
        <TransactionList transactions={transactions}/>
    
    </MainContainer>
  );
};
