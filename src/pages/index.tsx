import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";

import { api } from "../service/api";

import { ProductCard } from "../components/ProductCard";

import { Container, FilterArea, ProductsArea } from "./styles";
import { Loader } from "../components/Loader";
import { Searchbar } from "../components/Searchbar";

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  sku: string;
  isFavorite: boolean;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data } = await api.get("/products");

        setProducts(data);
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

      const { data } = await api.get(`/products?name_like=${term}`);
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>HVAR - WHIRLPOOL | HOME</title>
      </Head>

      <Container>
        {isLoading && <Loader />}

        <FilterArea>
          <Searchbar
            onChange={(data) => setTerm(data)}
            onSubmit={() => handleSearch()}
          />
        </FilterArea>

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
                favorite={product.isFavorite}
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
