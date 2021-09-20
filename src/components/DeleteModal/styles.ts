import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 500px;
  background-color: var(--color-card);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
`;

export const CloseArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Clickable = styled.div`
  cursor: pointer;
`;
