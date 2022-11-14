import user from './userProfile/user';
import { User } from './userProfile/UserProfile';
import data from './statisticList/data';
import { StatisticsList } from './statisticList/StatisticsList';
import friends from "./friendsList/friends"
import { FriendsList } from './friendsList/FriendsList';
import transactions from "./transactionsHistory/transactions"
import { TransactionList } from './transactionsHistory/TransactionsList';


export const App = () => {
  return (
    <div>    
 
        <User user={user} />   

        <StatisticsList data={data} />
    
        <FriendsList friends={friends}/>
      
        <TransactionList transactions={transactions}/>
    
    </div>
  );
};
