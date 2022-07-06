import { CheckCircle, Circle } from 'phosphor-react';
import styled from 'styled-components';

interface TodoContentProps {
  isCompleted: boolean;
}

export const Container = styled.li`
  width: 100%;
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  background-color: var(--gray-500);
  padding: 1rem;

  border: 1px solid var(--gray-400);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  & + li {
    margin-top: 0.75rem;
  }

  p {
    font-size: 0.875rem;
    flex: 1;
    color: var(--gray-100);
  }
`;

export const Button = styled.span`
  height: 0;
`;

export const CheckedButton = styled(CheckCircle)`
  cursor: pointer;

  fill: var(--purple-700);

  & circle {
    opacity: inherit;
    stroke: var(--purple-700);
  }

  & polyline {
    color: var(--gray-100);
  }
`;

export const UncheckedButton = styled(Circle)`
  color: var(--blue-500);
  cursor: pointer;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 0.625rem;
  color: var(--gray-300);

  transition: color 0.2s;

  svg {
    cursor: pointer;
  }

  svg:hover {
    color: var(--red-500);
  }
`;

export const TodoContent = styled.p<TodoContentProps>`
  text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
  opacity: ${props => (props.isCompleted ? '0.5' : '1')};
`;
