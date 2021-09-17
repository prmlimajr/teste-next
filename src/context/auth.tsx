import React, { createContext, useState, useContext, useEffect } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  signIn(user: User): void;
  signOut(): void;
}

interface User {
  name: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "HVAR-WHIRLPOOL_USER": user } = parseCookies();

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const signIn = ({ name }: User) => {
    const user = {
      name,
    };

    setUser(user);
    setCookie(null, "HVAR-WHIRLPOOL_USER", JSON.stringify(user), {
      maxAge: 60 * 60 * 24, // 1 day
    });

    Router.push("/");
  };

  const signOut = () => {
    destroyCookie(null, "HVAR-WHIRLPOOL_USER");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
