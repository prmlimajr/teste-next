import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";

import { Loader } from "../components/Loader";
import { Searchbar } from "../components/Searchbar";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/Button";
import { ProductModal } from "../components/ProductModal";

import { api } from "../service/api";

import {
  Container,
  MenuContainer,
  MenuArea,
  FilterHeader,
  Options,
  Option,
  ProductsArea,
} from "./styles";
import { useProduct } from "../context/products";

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  sku: string;
  isFavorite: boolean;
  created_at: string;
  updated_at: string;
  updated_by: string;
}

export default function Home() {
  const [term, setTerm] = useState("");
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { products, list, search, filter, order } = useProduct();

  useEffect(() => {
    async function loadProducts() {
      try {
        await list();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      await search(term);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilter = async () => {
    try {
      setIsLoading(true);

      await filter();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOrder = async (sort: string) => {
    try {
      setIsLoading(true);

      await order(sort);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearFilter = async () => {
    try {
      setIsLoading(true);

      await list();
    } catch (error) {
      console.error(error);
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
  };

  return (
    <>
      <Head>
        <title>HVAR - WHIRLPOOL | HOME</title>
      </Head>

      <Container>
        {isLoading && <Loader />}

        {isProductModalOpen && (
          <ProductModal
            type="CREATE"
            onClose={(e: boolean) => handleCloseModal(e)}
          />
        )}

        <MenuContainer>
          <MenuArea>
            <Button primary onClick={() => setIsProductModalOpen(true)}>
              Adicionar Produto
            </Button>
          </MenuArea>

          <MenuArea>
            <FilterHeader>Filtros:</FilterHeader>

            <Searchbar
              onChange={(data) => setTerm(data)}
              onSubmit={() => handleSearch()}
            />

            <FilterHeader>Ordenar por:</FilterHeader>

            <Options>
              <Option onClick={() => handleOrder("price")}>Preço</Option>
              <Option onClick={() => handleOrder("name")}>Nome</Option>
            </Options>

            <FilterHeader>Filtros:</FilterHeader>
            <Options>
              <Option onClick={() => handleFilter()}>Favoritos</Option>
            </Options>

            <Button onClick={() => handleClearFilter()}>Limpar filtros</Button>
          </MenuArea>
        </MenuContainer>

        <ProductsArea>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product?.image}
                name={product.name}
                price={product.price}
                sku={product.sku}
                isFavorite={product.isFavorite}
                created_at={product.created_at}
                updated_at={product.updated_at}
                updated_by={product.updated_by}
              />
            );
          })}
        </ProductsArea>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["HVAR-WHIRLPOOL_USER"]: user } = parseCookies(ctx);

  if (!user) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
