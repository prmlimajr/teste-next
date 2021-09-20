import React, { createContext, useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import Router from "next/router";
import { api } from "../service/api";
import { useAuth } from "./auth";

interface ProductContextData {
  products: Product[];
  register: (product: Product) => Promise<void>;
  update: (id: string | string[], product: Product) => Promise<void>;
  destroy: (id: string) => Promise<void>;
  list: () => Promise<void>;
  findOne: (id: string | string[]) => Product;
  search: (query: string) => Promise<void>;
  filter: () => Promise<void>;
  order: (query: string) => Promise<void>;
}

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  isFavorite: boolean;
  image?: string;
  created_at: string;
  updated_at: string;
  updated_by: string;
}

const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData
);

export const ProductProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const { user } = useAuth();

  const list = async () => {
    try {
      const { data } = await api.get("/products?_sort=name");

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const search = async (term: string) => {
    try {
      const { data } = await api.get(`/products?name_like=${term}`);

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filter = async () => {
    try {
      const { data } = await api.get(`/products?favorite=true`);

      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const order = async (sort: string) => {
    try {
      const { data } = await api.get(`/products?_sort=${sort}`);

      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const findOne = (id: string | string[]): Product => {
    try {
      const [productExists] = products.filter((product) => product.id === id);

      return productExists;
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (product: Product) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await api.post("/products", product, config);

      await list();
    } catch (error) {
      console.error(error);
    }
  };

  const update = async (id: string | string[], product: Product) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await api.put(`/products/${id}`, product, config);

      await list();
    } catch (error) {
      console.error(error);
    }
  };

  const destroy = async (id: string) => {
    try {
      await api.delete(`/products/${id}`);

      await list();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        list,
        search,
        filter,
        order,
        findOne,
        register,
        update,
        destroy,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within an ProductProvider");
  }

  return context;
}
