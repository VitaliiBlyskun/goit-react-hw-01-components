import PropTypes from 'prop-types';
import { Wrapper, Container } from '../Base.styled';
import {
  CardInfo,
  Paragraph,
  ListInfo,
  Section,
  ImgUser,
} from './UserProfile.styled';

export const User = ({ user: { username, tag, location, avatar, stats: {followers, views, likes} } }) => {
  return (
    <Wrapper>
      <Container>
        <CardInfo>
          <ImgUser src={avatar} alt="img" width="48" />
          <p>{username}</p>
          <Paragraph>{tag}</Paragraph>
          <Paragraph>{location}</Paragraph>
        </CardInfo>
        <ListInfo>
          <li>
            <Section>Followers: {followers}</Section>
          </li>
          <li>
            <Section>Views: {views}</Section>
          </li>
          <li>
            <Section>Likes: {likes}</Section>
          </li>
        </ListInfo>
      </Container>
    </Wrapper>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

