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

  @media (max-width: 1080px) {
    width: 130px;
    height: 250px;
    margin-right: 0;
    margin: 10px;
    justify-content: space-between;
  }

  @media (max-width: 720px) {
    width: 130px;
    height: 250px;
    margin-right: 0;
    margin: 10px;
    justify-content: space-between;
  }
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

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const ProductPrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Clickable = styled.div`
  cursor: pointer;
`;
