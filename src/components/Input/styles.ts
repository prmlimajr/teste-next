import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: var(--color-card);
  margin-top: 10px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--text-light);
  height: 56px;
`;

export const TextInput = styled.input`
  width: 100%;
  background: var(--color-card);
  height: 30px;
  border: none;
  padding: 0 10px;
`;