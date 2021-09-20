import React, { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { api } from "../../service/api";

import {
  Container,
  ProductSKU,
  ProductImage,
  ProductTitle,
  ProductPrice,
  FooterContainer,
  Clickable,
} from "./styles";

import { useAuth } from "../../context/auth";
import { Loader } from "../Loader";
import { useProduct } from "../../context/products";

interface ProductProps {
  id: string;
  image?: string;
  name: string;
  sku: string;
  price: number;
  isFavorite: boolean;
  created_at: string;
  updated_at: string;
  updated_by: string;
}

export function ProductCard(product: ProductProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();
  const { update } = useProduct();

  const handleLike = async () => {
    try {
      setIsLoading(true);

      await update(product.id, {
        id: product.id,
        name: product.name,
        sku: product.sku,
        price: product.price,
        isFavorite: !product.isFavorite,
        created_at: product.created_at,
        updated_at: format(new Date(), "dd/MM/yyyy"),
        updated_by: user.name,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {isLoading && <Loader />}

      {product.image && (
        <ProductImage
          src={product.image}
          alt={product.name}
          width="200px"
          height="200px"
        />
      )}

      <Link href="/products/[id]" as={`/products/${product.id}`} passHref>
        <ProductTitle>{product.name}</ProductTitle>
      </Link>

      <ProductSKU>{product.sku}</ProductSKU>

      <FooterContainer>
        <ProductPrice>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </ProductPrice>

        <Clickable onClick={() => handleLike()}>
          {product.isFavorite ? <FaHeart size={24} /> : <FiHeart size={24} />}
        </Clickable>
      </FooterContainer>
    </Container>
  );
}
