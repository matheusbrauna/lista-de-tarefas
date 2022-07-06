import { Layout } from './components/layout';
import { TodoContextProvider } from './contexts/TodoContext';
import GlobalStyles from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <TodoContextProvider>
        <Layout />
      </TodoContextProvider>
      <GlobalStyles />
    </>
  );
}
