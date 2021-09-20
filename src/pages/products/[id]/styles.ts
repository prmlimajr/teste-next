import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background);
  margin-bottom: 150px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  background: var(--color-card);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const GoBackArea = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoBack = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
`;

export const Settings = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

export const Clickable = styled.div`
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const ProductName = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1;
`;

export const ProductSku = styled.span`
  font-size: 0.8rem;
  color: var(--text-light);
  margin-top: 10px;
`;

export const ProductPrice = styled.span`
  font-size: 2.5rem;
  margin: 20px 0;
`;

export const Right = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const ProductMetadata = styled.span`
  font-size: 0.8rem;
  line-height: 2rem;
`;
