import Router from "next/router";
import React from "react";
import { FiHeart, FiLogOut } from "react-icons/fi";
import { useAuth } from "../../context/auth";

import { Container, List, Item, Span } from "./styles";

interface DropdownProps {
  toggleDropdown: () => void;
}

export function Dropdown({ toggleDropdown }: DropdownProps) {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    toggleDropdown();
    signOut();
  };

  return (
    <Container>
      <List>
        <Item>
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
