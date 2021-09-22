import styled from "styled-components";

export const Container = styled.main`
  padding: 20px 100px;
  margin-bottom: 100px;
  display: flex;

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
    margin-top: 120px;
  }
`;

export const MenuContainer = styled.aside``;

export const MenuArea = styled.div`
  background: var(--color-card);
  width: 300px;
  max-height: 310px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 30px;
  margin-bottom: 20px;
  padding: 10px;

  @media (max-width: 1080px) {
    padding: 20px;
  }

  @media (max-width: 720px) {
    margin-right: 0;
  }
`;

export const FilterHeader = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
`;

export const Options = styled.ul``;

export const Option = styled.li`
  line-height: 1.5rem;
  cursor: pointer;
  font-weight: 700;
`;

export const ProductsArea = styled.section`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
