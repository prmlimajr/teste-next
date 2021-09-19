import styled from "styled-components";
import Image from "next/image";

export const Container = styled.nav`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const UserArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50px;
  border: 1px solid var(--button-primary);
  background: var(--color-card);
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-left: 10px;
`;
