import React from "react";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

import {
  Container,
  ProductSKU,
  ProductImage,
  ProductTitle,
  ProductPrice,
  FooterContainer,
  Clickable,
} from "./styles";

interface ProductProps {
  id: string;
  image?: string;
  name: string;
  sku: string;
  price: number;
}

export function ProductCard({ id, image, name, sku, price }: ProductProps) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <Container>
      <ProductImage src={image} alt={name} width="200px" height="200px" />

      <Link href="/products/[id]" as={`/products/${id}`} passHref>
        <ProductTitle>{name}</ProductTitle>
      </Link>

      <ProductSKU>{sku}</ProductSKU>

      <FooterContainer>
        <ProductPrice>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ProductPrice>

        <Clickable onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? <FaHeart size={24} /> : <FiHeart size={24} />}
        </Clickable>
      </FooterContainer>
    </Container>
  );
}
