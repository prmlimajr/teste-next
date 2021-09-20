import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiChevronLeft, FiEdit, FiTrash2, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { format } from "date-fns";

import { ProductModal } from "../../../components/ProductModal";
import { DeleteModal } from "../../../components/DeleteModal";
import { Loader } from "../../../components/Loader";

import { useProduct } from "../../../context/products";
import { useAuth } from "../../../context/auth";

import {
  Container,
  ProductCard,
  Menu,
  GoBackArea,
  GoBack,
  Settings,
  Clickable,
  ProductInfo,
  Left,
  ProductName,
  ProductSku,
  ProductPrice,
  Right,
  ProductMetadata,
} from "./styles";

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  isFavorite: boolean;
  created_at: string;
  updated_at: string;
  updated_by: string;
}

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product>({} as Product);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { products, findOne, list, update, destroy } = useProduct();
  const { user } = useAuth();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    function loadProduct() {
      const productExists = findOne(id);

      setProduct(productExists);
    }

    try {
      loadProduct();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [products]);

  const handleLike = async () => {
    try {
      setIsLoading(true);

      await update(id, {
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

  const handleCloseModal = async (success: boolean) => {
    if (success) {
      try {
        setIsLoading(true);

        await list();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    setIsProductModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <Container>
      {isLoading && <Loader />}
      {isProductModalOpen && (
        <ProductModal
          type="EDIT"
          onClose={(e: boolean) => handleCloseModal(e)}
          product={product}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteModal
          id={product.id}
          onClose={(e: boolean) => handleCloseModal(e)}
        />
      )}

      {product && (
        <ProductCard>
          <Menu>
            <GoBackArea onClick={() => router.push("/")}>
              <FiChevronLeft size={20} />
              <GoBack>Voltar</GoBack>
            </GoBackArea>

            <Settings>
              <Clickable onClick={() => handleLike()}>
                {product.isFavorite ? (
                  <FaHeart size={24} />
                ) : (
                  <FiHeart size={24} />
                )}
              </Clickable>
              <Clickable onClick={() => setIsProductModalOpen(true)}>
                <FiEdit size={20} />
              </Clickable>
              <Clickable onClick={() => setIsDeleteModalOpen(true)}>
                <FiTrash2 size={20} />
              </Clickable>
            </Settings>
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
            </Right>
          </ProductInfo>
        </ProductCard>
      )}
    </Container>
  );
}
