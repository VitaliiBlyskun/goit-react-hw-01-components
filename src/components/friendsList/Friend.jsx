import PropTypes from 'prop-types';
import { FriendCard, UserImg, Circle } from './Friend.styled';

export const Friend = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <FriendCard>
      <Circle isOnline={isOnline}>­</Circle>
      <UserImg src={avatar} alt="img" width="48" />
      <p>{name}</p>
    </FriendCard>
  );
};

Friend.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};



// {/* <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="User avatar" width="48" />
//   <p class="name"></p>
// </li> */}

// {/* <ul class="friend-list">
//   <!-- Довільна кіл-сть FriendListItem -->
// </ul> */}

// BsFillCircleFill
