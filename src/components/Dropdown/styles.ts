import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 80%;
  right: 10%;
  width: 180px;
  background: var(--color-card);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;

  &:hover {
    background: var(--background);
  }

  &:last-child {
    color: var(--alert);
  }
`;

export const Span = styled.span`
  font-weight: 700;
  margin-left: 10px;
`;
