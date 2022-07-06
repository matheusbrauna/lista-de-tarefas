import { PlusCircle } from 'phosphor-react';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import { Container } from './styles';

export function NewTask() {
  const { handleAddNewTask, title, setTitle } = useContext(TodoContext);

  return (
    <Container onSubmit={handleAddNewTask}>
      <input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <button type='submit'>
        Criar
        <PlusCircle size={16} weight='bold' />
      </button>
    </Container>
  );
}
