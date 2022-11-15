import PropTypes from 'prop-types';
import { ListItem } from './Statistics.styled';


export const Statistics = ({ stats: { label, percentage } }) => {
  return (
    <ListItem>
      <span>{label} </span>
      <span>{percentage}%</span>
    </ListItem>
  );
};

Statistics.propTypes = {
  user: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
