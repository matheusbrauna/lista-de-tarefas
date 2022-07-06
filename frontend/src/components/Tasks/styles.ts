import styled from 'styled-components';

export const Container = styled.main`
  max-width: 46rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4rem;
  padding-inline: 1rem;
`;

export const TaskInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CreatedTasks = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  h4 {
    color: var(--blue-500);
    font-size: 0.875rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    padding: 0px 8px;

    background: var(--gray-400);
    border-radius: 999px;
    color: var(--gray-200);
  }
`;

export const TasksCompleted = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  h4 {
    color: var(--purple-500);
    font-size: 0.875rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    padding: 0.125rem 0.5rem;

    background: var(--gray-400);
    border-radius: 999px;
    color: var(--gray-200);
  }
`;

export const TaskList = styled.ul``;
