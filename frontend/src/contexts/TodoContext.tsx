import {
  createContext,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useAxios } from '../components/hooks/useAxios';
import { TaskProps } from '../components/Task';
import api from '../services/api';

interface TodoProviderProps {
  children: ReactNode;
}

interface TodoContextData {
  handleDeleteTask: (id: string) => void;
  title: string;
  setTitle: (newState: string) => void;
  handleAddNewTask: (event: FormEvent) => void;
}

export const TodoContext = createContext<TodoContextData>(
  {} as TodoContextData,
);

export function TodoContextProvider({ children }: TodoProviderProps) {
  const { data, mutate } = useAxios('todos');
  const [title, setTitle] = useState('');

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    if (!title) return;

    const newTask = {
      title,
    };

    api.post('todos', newTask);

    const newTasks = {
      todos: [...data.todos, newTask],
    };

    mutate(newTasks, false);
    setTitle('');
  }

  function handleDeleteTask(id: string) {
    api.delete(`todos/${id}`);

    const updatedTodos = {
      todos: data.todos?.filter((todo: TaskProps) => todo._id !== id),
    };

    mutate(updatedTodos, false);
  }

  return (
    <TodoContext.Provider
      value={{
        handleDeleteTask,
        title,
        handleAddNewTask,
        setTitle,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
