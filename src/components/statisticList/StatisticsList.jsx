import { Statistics } from './Statistics';
import { Wrapper, Container } from '../Base.styled';
import { Title, StatsList } from './Statistics.styled';

export const StatisticsList = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Title>Upload stats</Title>
        <StatsList>
          {data.map(data => (
              <Statistics key={data.id} data={data} />
          ))}
        </StatsList>
      </Container>
    </Wrapper>
  );
};
