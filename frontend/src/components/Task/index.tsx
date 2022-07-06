import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import api from '../../services/api';
import { useAxios } from '../hooks/useAxios';
import {
  Button,
  CheckedButton,
  Container,
  IconGroup,
  TodoContent,
  UncheckedButton,
} from './styles';

export interface TaskProps {
  _id: string;
  title: string;
  completed: boolean;
}

export function Task({ _id, title, completed }: TaskProps) {
  const { handleDeleteTask } = useContext(TodoContext);
  const { data, mutate } = useAxios('todos');

  function updateTask(id: string) {
    const todoUpdate: Pick<TaskProps, 'completed'> = {
      completed: !completed,
    };

    api.put(`todos/${id}`, todoUpdate);

    const todosUpdated = {
      todos: data.todos?.map((todo: TaskProps) => {
        if (todo._id === id) {
          return { ...todo, title: todo.title, completed: !todo.completed };
        }
        return todo;
      }),
    };

    mutate(todosUpdated, false);
  }

  return (
    <Container>
      <Button
        onClick={() => {
          updateTask(_id);
        }}
      >
        {completed ? (
          <CheckedButton size={24} weight='duotone' />
        ) : (
          <UncheckedButton size={24} />
        )}
      </Button>
      <TodoContent isCompleted={completed}>{title}</TodoContent>

      <IconGroup>
        <Trash size={24} onClick={() => handleDeleteTask(_id)} />
      </IconGroup>
    </Container>
  );
}
