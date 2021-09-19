import styled from "styled-components";

export const Container = styled.main`
  padding: 20px 100px;
  margin-bottom: 100px;
  display: flex;
`;

export const FilterArea = styled.aside`
  background: var(--color-card);
  width: 200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 30px;
`;

export const ProductsArea = styled.section`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
