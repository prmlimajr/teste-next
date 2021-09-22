import styled from "styled-components";
import Image from "next/image";

export const Container = styled.nav`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1080px) {
    padding: 20px 50px;
  }

  @media (max-width: 720px) {
    padding: 20px 20px;
    max-width: 370px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background: var(--background);
    width: 100%;
  }
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

  @media (max-width: 720px) {
    padding: 2px;
  }
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-left: 10px;

  @media (max-width: 720px) {
    display: none;
  }
`;
