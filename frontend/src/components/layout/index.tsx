import { Header } from '../Header';
import { NewTask } from '../NewTask';
import { Tasks } from '../Tasks';
import { Container } from './styles';

export function Layout() {
  return (
    <Container>
      <Header />
      <NewTask />
      <Tasks />
    </Container>
  );
}
