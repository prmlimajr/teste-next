import styled from 'styled-components';

export const Container = styled.button`
  color: var(--text-secondary);
  height: 56px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 16px;
  transition: opacity 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
