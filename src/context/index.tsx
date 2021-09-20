import React, { ReactChild, ReactChildren } from "react";
import { AuthProvider } from "./auth";
import { ProductProvider } from "./products";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export function AppProvider({ children }: AuxProps) {
  return (
    <AuthProvider>
      <ProductProvider>{children}</ProductProvider>
    </AuthProvider>
  );
}
