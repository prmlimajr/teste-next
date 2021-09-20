import React, { useEffect, useRef } from "react";
import { FiHeart, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/auth";
import { useProduct } from "../../context/products";

import { Container, List, Item, Span } from "./styles";

interface DropdownProps {
  toggleDropdown: () => void;
  isOpen: boolean;
}

export function Dropdown({ toggleDropdown, isOpen }: DropdownProps) {
  const { signOut } = useAuth();
  const { filter } = useProduct();
  const node = useRef<HTMLDivElement>(null);

  const handleSignOut = () => {
    toggleDropdown();
    signOut();
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    toggleDropdown();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleFavorite = () => {
    filter();
    toggleDropdown();
  };

  return (
    <Container ref={node} style={isOpen ? null : { display: "none" }}>
      <List>
        <Item onClick={handleFavorite}>
          <FiHeart size={20} />
          <Span>Favoritos</Span>
        </Item>

        <Item onClick={handleSignOut}>
          <FiLogOut size={20} />
          <Span>Sair</Span>
        </Item>
      </List>
    </Container>
  );
}
