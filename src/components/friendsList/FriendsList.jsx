import { Friend } from './Friend';
import { Wrapper, Container } from '../Base.styled';

export const FriendsList = ({ friends }) => {
  return (
    <Wrapper>
      <Container>
        <ul key={friends.id}>
          {friends.map(friends => (
              <Friend friends={friends} />
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
};
