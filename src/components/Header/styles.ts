import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-left: 10px;
`;
