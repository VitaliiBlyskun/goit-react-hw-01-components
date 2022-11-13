import { Friend } from './Friend';
import { Wrapper, Container } from '../Base.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Wrapper>
      <Container>
        <ul>
          {friends.map(friends => (
            <li key={friends.id}>
              <Friend friends={friends} />
            </li>
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

// export const StatisticsList = ( {data} ) => {
//     return <div>
//     <h2>Upload stats</h2>
//     <ul>
//         {data.map(data => (
//         <li key={data.id}>
//             <Statistics data={data}/>
//         </li>
//         ))}
//     </ul>
//     </div>
// }
