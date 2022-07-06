import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  max-width: 46rem;
  width: 100%;
  gap: 0.5rem;
  margin-top: -1.75rem;
  padding-inline: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    background-color: var(--gray-500);
    border: 1px solid var(--gray-700);
    border-radius: 8px;
    outline: 0;
    color: var(--gray-300);

    transition: outline 0.1s;

    &:hover {
      outline: 1px solid var(--purple-700);
    }

    &:focus {
      outline: 1px solid var(--purple-700);
      color: var(--gray-100);
    }
  }

  button {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    border-radius: 8px;
    padding: 1rem;

    font-weight: bold;
    font-size: 0.875rem;

    color: var(--gray-100);
    background-color: var(--blue-700);

    border: none;
    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background-color: var(--blue-500);
    }

    svg {
      align-self: center;
    }
  }
`;
