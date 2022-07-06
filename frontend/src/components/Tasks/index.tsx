import { useAxios } from '../hooks/useAxios';
import { Task, TaskProps } from '../Task';
import {
  Container,
  CreatedTasks,
  TaskInfo,
  TaskList,
  TasksCompleted,
} from './styles';

export function Tasks() {
  const { data } = useAxios('todos');
  const totalTasks = data?.todos?.length;
  const tasksComplete = data?.todos?.reduce(
    (acc: number, task: TaskProps) => (task.completed ? acc + 1 : acc),
    0,
  );

  return (
    <Container>
      <TaskInfo>
        <CreatedTasks>
          <h4>Tarefas criadas</h4>
          <div>
            <span>{totalTasks}</span>
          </div>
        </CreatedTasks>

        <TasksCompleted>
          <h4>Concluídas</h4>
          <div>
            <span>{`${tasksComplete} de ${totalTasks}`}</span>
          </div>
        </TasksCompleted>
      </TaskInfo>
      <TaskList>
        {data?.todos?.map((task: TaskProps) => (
          <Task
            key={task._id}
            _id={task._id}
            title={task.title}
            completed={task.completed}
          />
        ))}
      </TaskList>
    </Container>
  );
}
