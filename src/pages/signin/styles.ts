import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 100px);
  padding-bottom: 120px;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 720px) {
    padding: 0 20px;
  }
`;

export const LogoContainer = styled.div`
  padding: 50px 150px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h1`
  margin: 30px 0;
  text-align: center;
`;

export const ValidationError = styled.span`
  font-weight: 700;
  color: var(--alert);
`;
