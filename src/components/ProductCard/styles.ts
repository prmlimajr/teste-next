import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  background: var(--color-card);
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProductImage = styled(Image)``;

export const ProductTitle = styled.span`
  font-weight: 900;
  margin-top: 5px;
  cursor: pointer;
`;

export const SKUContainer = styled.div`
  border: 1px solid var(--button-secondary);
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 50px;
  align-self: flex-start;
  margin-bottom: 5px;
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
  font-size: 1.1rem;
  font-weight: 900;
`;

export const Clickable = styled.div`
  cursor: pointer;
`;
