import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  background: var(--color-card);
  width: 220px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const ProductImage = styled(Image)``;

export const ProductTitle = styled.span`
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 5px;
  cursor: pointer;
`;

export const ProductSKU = styled.span`
  font-size: 0.6rem;
  color: var(--text-light);
  font-weight: 700;
  margin-bottom: 10px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Clickable = styled.div`
  cursor: pointer;
`;
