import React, { ReactChild, ReactChildren } from "react";
import { AuthProvider } from "./auth";

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export function AppProvider({ children }: AuxProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
