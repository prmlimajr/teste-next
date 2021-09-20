import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useProduct } from "../../context/products";
import { Button } from "../Button";
import { Loader } from "../Loader";

import {
  Wrapper,
  Container,
  Title,
  Description,
  CloseArea,
  Clickable,
} from "./styles";

interface ModalProps {
  id: string;
  onClose: (success: boolean) => void;
}

export function DeleteModal({ id, onClose }: ModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { destroy } = useProduct();
  const router = useRouter();

  const node = useRef<HTMLDivElement>(null);

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

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await destroy(id);

      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      onClose(true);
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Container ref={node}>
        {isLoading && <Loader />}

        <CloseArea>
          <Clickable onClick={() => onClose(false)}>
            <IoMdClose size={24} />
          </Clickable>
        </CloseArea>

        <Title>Atenção!</Title>

        <Description>Você deseja realmente excluir este produto?</Description>

        <Button onClick={() => handleDelete()}>CONFIRMAR</Button>
      </Container>
    </Wrapper>
  );
}
