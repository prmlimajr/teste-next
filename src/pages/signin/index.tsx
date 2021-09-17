import React, { useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { FiUser } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// import { useAuth } from '../../hooks/auth';

import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

import WhirlpoolLogo from "../../../public/whirlpool-logo.png";

import {
  Container,
  LogoContainer,
  FormContainer,
  FormTitle,
  ValidationError,
} from "./styles";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Favor informar o seu nome")
    .min(3, "Nome muito curto"),
});

interface IForm {
  name: string;
}

export default function SignIn() {
  // const { user, signIn } = useAuth();

  const handleSubmit = (data: IForm) => {};

  return (
    <Container>
      <LogoContainer>
        <Image
          src={WhirlpoolLogo}
          alt="Whirlpool logo"
          width="200px"
          height="70px"
        />
      </LogoContainer>

      <FormContainer>
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(data) => handleSubmit(data)}
          validationSchema={schema}
        >
          <Form>
            <FormTitle>Sign In</FormTitle>

            <Button icon={FaGithub} type="submit">
              Entrar com Github
            </Button>

            <Divider />

            <Field
              type="text"
              name="name"
              label="Nome"
              placeholder="Insira o seu nome"
              icon={FiUser}
              as={Input}
            />
            <ErrorMessage component={ValidationError} name="name" />

            <Button primary type="submit">
              Entrar
            </Button>
          </Form>
        </Formik>
      </FormContainer>

      <Footer />
    </Container>
  );
}