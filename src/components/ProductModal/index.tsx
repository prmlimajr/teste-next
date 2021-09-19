import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import { ErrorMessage, Form, Field, Formik } from "formik";
import { IoMdClose } from "react-icons/io";

import { Input } from "../Input";

import { api } from "../../service/api";

import {
  Wrapper,
  Container,
  CloseArea,
  Title,
  ValidationError,
} from "./styles";
import { Button } from "../Button";
import { useAuth } from "../../context/auth";
import { Loader } from "../Loader";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Favor informar o nome do produto")
    .min(3, "Nome muito curto"),
  sku: Yup.string()
    .required("Favor informar o SKU do produto")
    .min(3, "Nome muito curto"),
  price: Yup.number()
    .required("Favor informar o preço do produto")
    .positive("Preço inválido"),
});

interface ProductModalProps {
  onClose: (success: boolean) => void;
  type: "CREATE" | "EDIT";
  product?: Product;
}

interface Product {
  id?: string;
  name: string;
  sku: string;
  price: number;
  created_at: string;
  updated_at: string;
  updated_by: string;
}

export function ProductModal({ onClose, type, product }: ProductModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const { user } = useAuth();

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose(false);
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    onClose(false);
  };

  const initialValues = () => {
    if (type === "EDIT") {
      return {
        name: product.name,
        sku: product.sku,
        price: product.price,
        created_at: product.created_at,
        updated_at: product.updated_at,
        updated_by: product.updated_by,
      };
    }
    return {
      name: "",
      sku: "",
      price: "",
      created_at: "",
      updated_at: "",
      updated_by: "",
    };
  };

  const handleSubmit = async ({ name, sku, price }) => {
    try {
      setIsLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (type === "CREATE") {
        await api.post(
          "/products",
          {
            id: uuidv4(),
            name,
            sku,
            price,
            created_at: new Date(),
            updated_at: new Date(),
            updated_by: user.name,
          },
          config
        );
      } else {
        await api.put(
          `/products/${product.id}`,
          {
            id: product.id,
            name,
            sku,
            price,
            created_at: product.created_at,
            updated_at: new Date(),
            updated_by: user.name,
          },
          config
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      onClose(true);
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      {isLoading && <Loader />}

      <Container ref={node}>
        <CloseArea>
          <IoMdClose size={24} onClick={() => onClose(false)} />
        </CloseArea>
        <Formik
          initialValues={initialValues()}
          onSubmit={(data) => handleSubmit(data)}
          validationSchema={schema}
        >
          {({ values }) => {
            console.log(values);
            return (
              <Form>
                <Title>
                  {type === "CREATE" ? "Adicionar Produto" : "Editar Produto"}
                </Title>

                <Field
                  type="text"
                  name="name"
                  label="Nome"
                  placeholder="Nome do produto"
                  as={Input}
                />
                <ErrorMessage component={ValidationError} name="name" />

                <Field
                  type="text"
                  name="sku"
                  label="SKU"
                  placeholder="SKU do produto"
                  as={Input}
                />
                <ErrorMessage component={ValidationError} name="sku" />

                <Field
                  type="number"
                  name="price"
                  label="Preço"
                  placeholder="Preço do produto"
                  as={Input}
                />
                <ErrorMessage component={ValidationError} name="price" />

                <Button primary type="submit">
                  Adicionar Produto
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Wrapper>
  );
}
