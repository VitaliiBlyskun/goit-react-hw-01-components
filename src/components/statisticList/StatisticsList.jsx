import { Statistics } from './Statistics';
import { Wrapper, Container } from '../Base.styled';
import { Title, StatsList } from './Statistics.styled';


export const StatisticsList = ({ title, stats }) => {
  return (
    <Wrapper>
      <Container>
        {title && <Title>Upload stats</Title>}
        <StatsList>
          {stats.map(stats => (
              <Statistics key={stats.id} stats={stats} />
          ))}
        </StatsList>
      </Container>
    </Wrapper>
  );
};
