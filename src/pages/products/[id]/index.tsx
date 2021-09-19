import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiChevronLeft, FiEdit, FiHeart } from "react-icons/fi";

import { Loader } from "../../../components/Loader";

import { api } from "../../../service/api";

import {
  Container,
  ProductCard,
  Menu,
  GoBackArea,
  GoBack,
  ProductInfo,
  Left,
  ProductName,
  ProductSku,
  ProductPrice,
  Right,
  ProductMetadata,
  Favorite,
} from "./styles";

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  created_at: string;
  updated_at: string;
  updated_by: string;
}

export default function Products() {
  const [product, setProduct] = useState<Product>({} as Product);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function loadProduct() {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    }

    try {
      loadProduct();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  return (
    <Container>
      {isLoading && <Loader />}

      {product && (
        <ProductCard>
          <Menu>
            <GoBackArea onClick={() => router.push("/")}>
              <FiChevronLeft size={20} />
              <GoBack>Voltar</GoBack>
            </GoBackArea>

            <FiEdit size={20} />
          </Menu>

          <ProductInfo>
            <Left>
              <ProductName>{product.name}</ProductName>
              <ProductSku>SKU: {product.sku}</ProductSku>
              <ProductPrice>
                {product.price?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </ProductPrice>
            </Left>
            <Right>
              <ProductMetadata>Criado em {product.created_at}</ProductMetadata>
              <ProductMetadata>
                Atualizado em {product.updated_at}
              </ProductMetadata>
              <ProductMetadata>
                Atualizado por {product.updated_by}
              </ProductMetadata>

              <Favorite>
                <FiHeart size={24} />
              </Favorite>
            </Right>
          </ProductInfo>
        </ProductCard>
      )}
    </Container>
  );
}
